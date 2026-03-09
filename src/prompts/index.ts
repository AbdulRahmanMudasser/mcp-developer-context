import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerCodeReview } from "./code-review.js";
import { registerApiUsage } from "./api-usage.js";
import { registerTestPlan } from "./test-plan.js";

export function registerPrompts(server: McpServer): void {
  registerCodeReview(server);
  registerApiUsage(server);
  registerTestPlan(server);
}
