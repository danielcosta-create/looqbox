import { z } from "zod";
import { logger } from "@/utils/logger";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
  NEXT_PUBLIC_LOOKBOX_URL: z.string().url(),
  NEXT_PUBLIC_ENVIRONMENT: z.enum(["development", "production", "staging"]),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  logger.error("Invalid environment variables");
  logger.error(parsedEnv.error.format());
  throw new Error("Invalid environment variables");
}

export const env = {
  API_URL: parsedEnv.data.NEXT_PUBLIC_API_URL,
  LOOKBOX_URL: parsedEnv.data.NEXT_PUBLIC_LOOKBOX_URL,
  ENVIRONMENT: parsedEnv.data.NEXT_PUBLIC_ENVIRONMENT,
};
