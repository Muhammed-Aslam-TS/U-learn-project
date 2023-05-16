import { HttpStatus } from "../Types/httpStatus";

class AppError extends Error {
    statusCode: number;
    status: string | boolean;
    isOperational: boolean;
    constructor(message: string, statusCode: HttpStatus) {
      super(message);
      
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'failed' : 'error';
      this.isOperational = true;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
export default AppError;