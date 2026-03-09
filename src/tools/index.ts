import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerSearchCodebase } from "./search-codebase.js";
import { registerProjectStructure } from "./project-structure.js";
import { registerRunCommand } from "./run-command.js";
import { registerFetchApiSpec } from "./fetch-api-spec.js";
import { registerValidateJson } from "./validate-json.js";

export function registerTools(server: McpServer): void {
  registerSearchCodebase(server);
  registerProjectStructure(server);
  registerRunCommand(server);
  registerFetchApiSpec(server);
  registerValidateJson(server);
}
