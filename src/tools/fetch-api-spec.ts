import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function registerFetchApiSpec(server: McpServer): void {
  server.registerTool(
    "fetch-api-spec",
    {
      title: "Fetch API spec",
      description: "Fetch and summarize OpenAPI/Swagger from URL",
      inputSchema: z.object({
        url: z.string().url(),
      }),
    },
    async () => ({
      content: [{ type: "text" as const, text: "" }],
    })
  );
}
