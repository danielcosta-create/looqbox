import { env } from "@/config/env";
import type { Logger } from "@/shared/utils/interfaces/logger";

export class ConsoleLogger implements Logger {
  private get isDev() {
    return env.NEXT_PUBLIC_ENVIRONMENT === "development";
  }

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
