import type { EnsureConfigResult } from "../../../types";
import type { DevToolsSys } from "../..";
export declare function viteEnsureConfigPlugin(sys: DevToolsSys, configFilePath: string, configContent: string): Promise<EnsureConfigResult>;
/**
 * Update a Vite config file to include a plugin
 */
export declare function updateViteConfig(sys: DevToolsSys, configFilePath: string, configContent: string, pluginName: string, importPath: string): Promise<EnsureConfigResult>;
