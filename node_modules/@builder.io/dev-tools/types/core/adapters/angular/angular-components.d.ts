import type { AngularDevToolsSys } from "./index";
import type ts from "typescript";
import type { AppDependency, ComponentInfo, ComponentInput, DevToolsSys } from "../../../types";
export declare function getAngularSourceComponentsFromDir(sys: AngularDevToolsSys, tsProgram: ts.Program): Promise<AngularComponentSource[]>;
export declare function getAngularComponentsFromPath(sys: DevToolsSys, filePath: string): Promise<AngularComponentSource[] | null>;
export declare function getAngularComponentsFromCode(sys: DevToolsSys, filePath: string, code: string): Promise<AngularComponentSource[]>;
export declare function getAngularComponentsFromSourceFile(sys: DevToolsSys, typeChecker: ts.TypeChecker | null, filePath: string, sourceFile: ts.SourceFile): Promise<AngularComponentSource[]>;
export declare function parseAngularComponentSourceInputs(sys: DevToolsSys, srcCmp: AngularComponentSource, tsProgram: ts.Program | null): Promise<ComponentInput[]>;
export declare function parseAngularAllComponentSourceInputs(sys: DevToolsSys, sourceComponents: AngularComponentSource[], components: ComponentInfo[]): Promise<ComponentInfo[]>;
export interface AngularComponentSourceNode {
    name: string;
    fnNode: ts.Node;
    deps: AppDependency[] | undefined;
}
export interface AngularComponentSource {
    cmpInfo: ComponentInfo;
    node: AngularComponentSourceNode;
}
