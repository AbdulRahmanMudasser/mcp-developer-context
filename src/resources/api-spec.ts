import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function registerApiSpec(server: McpServer): void {
  server.registerResource(
    "api-spec",
    "api://spec",
    {
      title: "API spec",
      description: "OpenAPI spec or summary",
      mimeType: "application/json",
    },
    async (uri) => ({
      contents: [{ uri: uri.href, mimeType: "application/json", text: "{}" }],
    })
  );
}
