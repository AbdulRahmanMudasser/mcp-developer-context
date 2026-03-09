import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function registerRunCommand(server: McpServer): void {
  server.registerTool(
    "run-command",
    {
      title: "Run command",
      description: "Run an allowlisted command in project dir",
      inputSchema: z.object({
        command: z.string(),
      }),
    },
    async () => ({
      content: [{ type: "text" as const, text: "" }],
    })
  );
}
