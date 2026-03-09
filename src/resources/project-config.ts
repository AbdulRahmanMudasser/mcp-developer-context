import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function registerProjectConfig(server: McpServer): void {
  server.registerResource(
    "project-config",
    "project://config",
    {
      title: "Project config",
      description: "Non-secret config summary",
      mimeType: "application/json",
    },
    async (uri) => ({
      contents: [{ uri: uri.href, mimeType: "application/json", text: "{}" }],
    })
  );
}
