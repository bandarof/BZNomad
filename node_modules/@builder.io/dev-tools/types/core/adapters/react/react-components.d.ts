import type ts from "typescript";
import type { AppDependency, ComponentInfo, DevToolsSys } from "../../../types";
import type { ReactDevToolsSys } from "./index";
export declare function parseReactAllComponentSourceInputs(sys: DevToolsSys, components: ComponentInfo[]): Promise<ComponentInfo[]>;
export declare function parseReactComponentSourceInputs(sys: DevToolsSys, srcCmp: ReactComponentSource, tsProgram: ts.Program | null, includeImports: boolean): Promise<import("../..").ComponentInput[]>;
export declare function getReactComponentsFromPath(sys: DevToolsSys, filePath: string, includeImports: boolean): Promise<ReactComponentSource[] | null>;
export declare function getReactComponentsFromCode(sys: DevToolsSys, filePath: string, code: string, includeImports?: boolean): Promise<ReactComponentSource[]>;
export declare function getReactComponentsFromSourceFile(sys: DevToolsSys, typeChecker: ts.TypeChecker | null, filePath: string, sourceFile: ts.SourceFile, includeImports: boolean): Promise<ReactComponentSource[]>;
export declare function getReactSourceComponentsFromDir(sys: ReactDevToolsSys, tsProgram: ts.Program): Promise<ReactComponentSource[]>;
export interface ReactComponentSourceNode {
    name: string;
    fnNode: ts.Node;
    deps: AppDependency[] | undefined;
}
export interface ReactComponentSource {
    cmpInfo: ComponentInfo;
    node: ReactComponentSourceNode;
}
