import type ts from "typescript";
import type { ComponentInfo, ComponentInput, DevToolsSys } from "../../types";
export declare function parseRegisteredComponentInfo(sys: DevToolsSys, cmpInfo: ComponentInfo, cmpObjLit: ts.ObjectLiteralExpression): ComponentInfo;
export declare function updateComponentObjLiteralInfoProperties(sys: DevToolsSys, cmpObjExp: ts.ObjectLiteralExpression, cmpInfo: ComponentInfo): ts.ObjectLiteralExpression;
export declare function updateComponentInputsArrayLiteralExp(sys: DevToolsSys, arrExp: ts.ArrayLiteralExpression, inputs: ComponentInput[]): ts.ArrayLiteralExpression;
export declare function mergeComponentInputs(cmp: ComponentInfo, inputs: ComponentInput[]): void;
export declare function componentAcceptsChildren(cmp: ComponentInfo): boolean;
export declare function normalizeComponentInput(input: ComponentInput): ComponentInput;
export declare function componentHasAcceptChildrenProp(sys: DevToolsSys, cmpObjLit: ts.ObjectLiteralExpression): boolean;
