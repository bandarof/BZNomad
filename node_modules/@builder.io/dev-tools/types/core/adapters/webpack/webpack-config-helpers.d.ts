import type { DevToolsSys } from "../..";
import type { EnsureConfigResult } from "../../../types";
/**
 * Result of a webpack config update operation
 */
export interface WebpackConfigUpdateResult extends EnsureConfigResult {
}
/**
 * Update a Webpack config file to include a plugin
 */
export declare function updateWebpackConfig(sys: DevToolsSys, configFilePath: string, configContent: string, pluginName: string, importPath: string): Promise<WebpackConfigUpdateResult>;
