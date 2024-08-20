export abstract class AbstractService {
  abstract execute(...args: any[]): Promise<any>;

  protected handleError(error: Error): void {
    // Generic error handling logic
    console.error('Service error:', error);
  }
}


