import type { AppDependency, ComponentInfo, DevToolsSys } from "../../types";
import type ts from "typescript";
export declare function getSourceDependencies(sys: DevToolsSys, typeChecker: ts.TypeChecker | null, fnNode: ts.Node): AppDependency[] | undefined;
export declare function getAppDependencies(cmps: ComponentInfo[]): AppDependency[];
