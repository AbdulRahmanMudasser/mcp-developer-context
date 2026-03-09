import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function registerValidateJson(server: McpServer): void {
  server.registerTool(
    "validate-json",
    {
      title: "Validate JSON",
      description: "Validate or format a JSON string",
      inputSchema: z.object({
        json: z.string(),
        action: z.enum(["validate", "format", "minify"]).optional(),
      }),
    },
    async () => ({
      content: [{ type: "text" as const, text: "" }],
    })
  );
}
