import { z } from "zod";
export function validateBody(schema) {
    return (req, _res, next) => {
        try {
            const result = schema.parse(req.body);
            req.body = result;
            next();
        }
        catch (err) {
            if (err instanceof z.ZodError) {
                const details = err.issues
                    .map((i) => `${i.path.join(".")}: ${i.message}`)
                    .join("; ");
                const error = new Error(`Validation failed: ${details}`);
                error.statusCode = 400;
                next(error);
                return;
            }
            next(err);
        }
    };
}
export function validateQuery(schema) {
    return (req, _res, next) => {
        try {
            const result = schema.parse(req.query);
            req.query = result;
            next();
        }
        catch (err) {
            if (err instanceof z.ZodError) {
                const details = err.issues
                    .map((i) => `${i.path.join(".")}: ${i.message}`)
                    .join("; ");
                const error = new Error(`Validation failed: ${details}`);
                error.statusCode = 400;
                next(error);
                return;
            }
            next(err);
        }
    };
}
