import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function registerSearchCodebase(server: McpServer): void {
  server.registerTool(
    "search-codebase",
    {
      title: "Search codebase",
      description: "Search files by pattern with optional glob",
      inputSchema: z.object({
        pattern: z.string(),
        glob: z.string().optional(),
      }),
    },
    async () => ({
      content: [{ type: "text" as const, text: "" }],
    })
  );
}
