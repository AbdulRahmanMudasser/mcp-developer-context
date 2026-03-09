import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function registerTestPlan(server: McpServer): void {
  server.registerPrompt(
    "test-plan",
    {
      title: "Test plan",
      description: "Suggest unit tests for a module",
      argsSchema: {
        module: z.string(),
        entryPoints: z.string().optional(),
      },
    },
    async ({ module: mod }) => ({
      messages: [
        {
          role: "user" as const,
          content: { type: "text" as const, text: mod },
        },
      ],
    })
  );
}
