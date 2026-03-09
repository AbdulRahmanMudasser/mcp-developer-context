import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function registerApiUsage(server: McpServer): void {
  server.registerPrompt(
    "api-usage",
    {
      title: "API usage",
      description: "Generate client example for an operation",
      argsSchema: {
        operationId: z.string(),
        language: z.string().optional(),
      },
    },
    async ({ operationId }) => ({
      messages: [
        {
          role: "user" as const,
          content: { type: "text" as const, text: operationId },
        },
      ],
    })
  );
}
