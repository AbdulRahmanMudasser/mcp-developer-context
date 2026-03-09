import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function registerProjectStructure(server: McpServer): void {
  server.registerTool(
    "project-structure",
    {
      title: "Project structure",
      description: "Return directory tree or key files list",
      inputSchema: z.object({
        depth: z.number().optional(),
      }),
    },
    async () => ({
      content: [{ type: "text" as const, text: "" }],
    })
  );
}
