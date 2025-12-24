import type ts from "typescript";
import type { ComponentInfo } from "../../../types";
import type { ReactDevToolsSys } from ".";
export declare function createReactRegisteredComponent(sys: ReactDevToolsSys, cmpInfo: ComponentInfo): ts.Statement;
export declare function updateReactRegisteredComponent(sys: ReactDevToolsSys, registerStatement: ts.Statement, cmpInfo: ComponentInfo): ts.Statement;
