import type { HealthStatus } from "@/types/health";

export function getHealthStatus(): HealthStatus {
  return { status: "ok", service: "kape-hapon-os", database: "not_checked" };
}
