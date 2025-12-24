import type ts from "typescript";
import type { QwikDevToolsSys } from "./index";
import type { ComponentInfo } from "../../../types";
export declare function getQwikComponentsFromDir(sys: QwikDevToolsSys, tsProgram: ts.Program): Promise<QwikComponentSource[]>;
export declare function getQwikComponentsFromPath(sys: QwikDevToolsSys, filePath: string): Promise<QwikComponentSource[] | null>;
export declare function getQwikComponentsFromCode(sys: QwikDevToolsSys, filePath: string, code: string): Promise<QwikComponentSource[]>;
export declare function getQwikComponentsFromSourceFile(sys: QwikDevToolsSys, typeChecker: ts.TypeChecker | null, filePath: string, sourceFile: ts.SourceFile): Promise<QwikComponentSource[]>;
export interface QwikComponentSourceNode {
    callExpression: ts.CallExpression;
    fnNode: ts.Node;
}
export interface QwikComponentSource {
    cmpInfo: ComponentInfo;
    node: QwikComponentSourceNode;
}
