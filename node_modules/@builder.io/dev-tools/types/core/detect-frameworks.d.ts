import type { DevToolsSys, Framework, PackageJSON } from "../types";
export declare function detectFrameworks(sys: DevToolsSys): Promise<Framework[]>;
export declare function detectTurbopack(sys: DevToolsSys): Promise<boolean>;
export declare function detectFrameworksFromPackageJson(pkgJson: PackageJSON, sys: DevToolsSys): Promise<Framework[]>;
