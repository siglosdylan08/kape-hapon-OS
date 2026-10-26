/** Process liveness only; this does not establish operational readiness. */
export interface HealthStatus {
  status: "ok";
  service: "kape-hapon-os";
  database: "not_checked";
}
