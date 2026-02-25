import { env } from "@/config/env";

class Logger {
  private isDev = env.ENVIRONMENT === "development";

  log(...args: unknown[]) {
    if (this.isDev) {
      console.log("[LOG]:", ...args);
    }
  }

  error(...args: unknown[]) {
    if (this.isDev) {
      console.error("[ERROR]:", ...args);
    }
  }

  warn(...args: unknown[]) {
    if (this.isDev) {
      console.warn("[WARN]:", ...args);
    }
  }
}

export const logger = new Logger();
