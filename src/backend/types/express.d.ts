import "express-serve-static-core";

// Module augmentation (file must stay a module via the import above),
// otherwise this ambient block shadows the real Express type definitions.
declare module "express-serve-static-core" {
  interface Request {
    requestId?: string;
    log?: import("pino").Logger;
  }
}
