import type ts from "typescript";
import type { ComponentInfo } from "../../../types";
import type { NextDevToolsSys } from ".";
export declare function createNextRegisteredComponent(sys: NextDevToolsSys, cmpInfo: ComponentInfo): ts.Statement;
export declare function updateNextRegisteredComponent(sys: NextDevToolsSys, registerStatement: ts.Statement, cmpInfo: ComponentInfo): ts.Statement;
