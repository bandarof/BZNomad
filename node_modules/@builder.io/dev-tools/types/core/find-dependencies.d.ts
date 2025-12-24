import type { DevToolsSys } from "../types";
export interface Package {
    name: string;
    subPackages: string[];
}
export type DependencyStructure = Package[];
export declare function findAllDependencies(sys: DevToolsSys, rootDir: string): Promise<DependencyStructure>;
