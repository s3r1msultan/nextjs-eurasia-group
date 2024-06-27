// errors.ts
export class NotFoundError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "NotFoundError";
    }
  }
  
  export class BadRequestError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "BadRequestError";
    }
  }
  
  export class ServerError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "ServerError";
    }
  }
  
  export class NetworkError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "NetworkError";
    }
  }
  