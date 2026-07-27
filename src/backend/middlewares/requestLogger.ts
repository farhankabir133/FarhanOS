import pinoHttp from "pino-http";
import { logger } from "../utils/logger.js";

export const requestLogger = pinoHttp({
  logger,
  customSuccessMessage: function (_req, _res, _responseTime) {
    return `${_res.statusCode} - ${_req.method} ${_req.url}`;
  },
  customErrorMessage: function (_req, _res, error) {
    return error.message;
  },
  autoLogging: {
    ignore: function (_req) {
      return false;
    },
  },
  genReqId: function (req, _res) {
    return crypto.randomUUID();
  },
  customAttributeKeys: {
    reqId: "requestId",
    responseTime: "durationMs",
  },
});