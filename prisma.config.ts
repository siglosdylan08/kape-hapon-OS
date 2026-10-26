import "dotenv/config";
import { defineConfig } from "prisma/config";
import { parseServerEnv } from "./src/lib/env";

const config = parseServerEnv(process.env);

export default defineConfig({
  schema: "prisma/schema.prisma",
  ...(config.DATABASE_URL ? { datasource: { url: config.DATABASE_URL } } : {}),
});
