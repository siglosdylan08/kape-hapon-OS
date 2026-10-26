// @vitest-environment node
import { describe, expect, it } from "vitest";
import { GET } from "./route";

describe("health endpoint", () => {
  it("reports process liveness without claiming database readiness or disclosing environment", async () => {
    const response = GET();
    expect(response.status).toBe(200);
    expect(response.headers.get("Cache-Control")).toBe("no-store");
    expect(await response.json()).toEqual({ status: "ok", service: "kape-hapon-os", database: "not_checked" });
  });
});
