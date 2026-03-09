import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function registerCodeReview(server: McpServer): void {
  server.registerPrompt(
    "code-review",
    {
      title: "Code review",
      description: "Review code for security, performance, or style",
      argsSchema: {
        code: z.string(),
        focus: z.string().optional(),
      },
    },
    async ({ code }) => ({
      messages: [
        {
          role: "user" as const,
          content: { type: "text" as const, text: code },
        },
      ],
    })
  );
}
