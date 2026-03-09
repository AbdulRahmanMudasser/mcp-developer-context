import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function registerProjectManifest(server: McpServer): void {
  server.registerResource(
    "project-manifest",
    "project://manifest",
    {
      title: "Project manifest",
      description: "Contents of package.json",
      mimeType: "application/json",
    },
    async (uri) => ({
      contents: [{ uri: uri.href, mimeType: "application/json", text: "{}" }],
    })
  );
}
