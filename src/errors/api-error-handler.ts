import { HttpStatusCode } from './http-status-code';

export class ApiError extends Error {
    constructor(public httpStatusCode: HttpStatusCode, message: string) {
      super(message);
      this.name = 'ApiError';
      this.httpStatusCode = httpStatusCode;
      this.message = message
    }
  }
  
  export const handleApiError = (error: unknown) => {
    if (error instanceof ApiError) {
      console.error(`API Error ${error.httpStatusCode}: ${error.message}`);
    } else {
      console.error('Unknown error:', error);
    }
  };