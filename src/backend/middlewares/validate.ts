import { Request, Response, NextFunction } from "express";
import { z, ZodSchema } from "zod";

export function validateBody(schema: ZodSchema) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      const result = schema.parse(req.body);
      req.body = result;
      next();
    } catch (err) {
      if (err instanceof z.ZodError) {
        const details = err.issues
          .map((i) => `${i.path.join(".")}: ${i.message}`)
          .join("; ");
        const error = new Error(`Validation failed: ${details}`) as Error & { statusCode: number };
        error.statusCode = 400;
        next(error);
        return;
      }
      next(err);
    }
  };
}

export function validateQuery(schema: ZodSchema) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      const result = schema.parse(req.query);
      req.query = result;
      next();
    } catch (err) {
      if (err instanceof z.ZodError) {
        const details = err.issues
          .map((i) => `${i.path.join(".")}: ${i.message}`)
          .join("; ");
        const error = new Error(`Validation failed: ${details}`) as Error & { statusCode: number };
        error.statusCode = 400;
        next(error);
        return;
      }
      next(err);
    }
  };
}