import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerProjectManifest } from "./project-manifest.js";
import { registerProjectConfig } from "./project-config.js";
import { registerApiSpec } from "./api-spec.js";

export function registerResources(server: McpServer): void {
  registerProjectManifest(server);
  registerProjectConfig(server);
  registerApiSpec(server);
}
