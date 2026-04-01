interface AppErrorConfig {
  message: string;
  statusCode?: number;
  errors?: Record<string, any>[];
  isInternal?: boolean;
}

export class AppError extends Error {
  public readonly statusCode: number | undefined;
  public readonly errors: Record<string, any>[] | undefined;
  public readonly isInternal: boolean;
  constructor({ statusCode, message, errors, isInternal }: AppErrorConfig) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.isInternal = isInternal ?? false;
  }
}
