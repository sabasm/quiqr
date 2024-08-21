class LoggerService {
  info(message: string) {
    console.log(`[INFO] ${message}`);
  }

  error(message: string) {
    console.error(`[ERROR] ${message}`);
  }
}

export default new LoggerService();


