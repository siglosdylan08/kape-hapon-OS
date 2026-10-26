import { z } from "zod";

const serverEnvSchema = z.object({
  DATABASE_URL: z.url().refine((value) => {
    const url = new URL(value);
    return ["postgresql:", "postgres:"].includes(url.protocol) && Boolean(url.hostname);
  }, "Expected a PostgreSQL connection URL").optional(),
});

/** Parse only on the server. Never pass the result to client components or logs. */
export function parseServerEnv(input: Record<string, string | undefined>) {
  return serverEnvSchema.parse(input);
}
