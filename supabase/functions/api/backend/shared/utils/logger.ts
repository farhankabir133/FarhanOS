import type { LogEntry } from "../types.ts";

export interface LoggerOptions {
  service: string;
  environment: string;
  logToStderr?: boolean;
}

let loggerInstance: Logger | null = null;

export function getLogger(options: LoggerOptions): Logger {
  if (!loggerInstance) {
    loggerInstance = new Logger(options);
  }
  return loggerInstance;
}

export function resetLogger(): void {
  loggerInstance = null;
}

class Logger {
  private service: string;
  private environment: string;
  private logToStderr: boolean;

  constructor(options: LoggerOptions) {
    this.service = options.service;
    this.environment = options.environment;
    this.logToStderr = options.logToStderr ?? true;
  }

  private emit(entry: LogEntry): void {
    const json = JSON.stringify(entry);
    if (this.logToStderr) {
      if (entry.level === "error") {
        console.error(json);
      } else if (entry.level === "warn") {
        console.warn(json);
      } else {
        console.log(json);
      }
    }
  }

  createEntry(
    route: string,
    method: string,
    statusCode: number,
    durationMs: number,
    message: string,
    error?: string
  ): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level: statusCode >= 500 ? "error" : statusCode >= 400 ? "warn" : "info",
      requestId: crypto.randomUUID(),
      route,
      method,
      statusCode,
      durationMs,
      error,
      message,
    };
  }

  info(route: string, method: string, statusCode: number, durationMs: number, message: string): void {
    this.emit(this.createEntry(route, method, statusCode, durationMs, message));
  }

  warn(route: string, method: string, statusCode: number, durationMs: number, message: string, error?: string): void {
    this.emit(this.createEntry(route, method, statusCode, durationMs, message, error));
  }

  error(route: string, method: string, durationMs: number, error: string, message?: string): void {
    this.emit(this.createEntry(route, method, 500, durationMs, message ?? error, error));
  }
}