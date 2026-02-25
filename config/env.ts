import { z } from "zod";

const clientEnvSchema = z.object({
  NEXT_PUBLIC_API_URL: z.url(),
  NEXT_PUBLIC_LOOQBOX_URL: z.url(),
  NEXT_PUBLIC_ENVIRONMENT: z.enum(["development", "production"]),
});

const parsed = clientEnvSchema.safeParse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_LOOQBOX_URL: process.env.NEXT_PUBLIC_LOOQBOX_URL,
  NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
});

if (!parsed.success) {
  console.error("Erro nas variáveis:", parsed.error.issues);
  throw new Error("Variáveis de ambiente inválidas.");
}

export const env = parsed.data;
