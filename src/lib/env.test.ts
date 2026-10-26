import { describe, expect, it } from "vitest";
import { parseServerEnv } from "./env";

describe("server environment", () => {
  it("does not require database credentials in Phase 1", () => {
    expect(parseServerEnv({})).toEqual({});
  });
  it("accepts PostgreSQL connection URLs", () => {
    expect(parseServerEnv({ DATABASE_URL: "postgresql://localhost/kape" }).DATABASE_URL).toBe("postgresql://localhost/kape");
  });
  it.each(["", "invalid", "https://example.com/db", "postgresql:"])("rejects invalid database configuration: %s", (value) => {
    expect(() => parseServerEnv({ DATABASE_URL: value })).toThrow();
  });
  it("does not copy unknown or public secret fields into validated config", () => {
    expect(parseServerEnv({ NEXT_PUBLIC_SECRET: "example", TOKEN: "example" })).toEqual({});
  });
});
