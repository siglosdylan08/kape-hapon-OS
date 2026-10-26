import { getHealthStatus } from "@/lib/health";

export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(getHealthStatus(), {
    headers: { "Cache-Control": "no-store" },
  });
}
