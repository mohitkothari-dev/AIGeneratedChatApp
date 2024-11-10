import { ChatError } from '../types/chat';

export function handleApiError(error: unknown): ChatError {
  if (error instanceof Error) {
    return {
      message: error.message,
      code: 'API_ERROR'
    };
  }
  return {
    message: 'An unexpected error occurred',
    code: 'UNKNOWN_ERROR'
  };
}