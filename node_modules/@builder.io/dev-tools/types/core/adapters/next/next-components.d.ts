import type { NextDevToolsSys } from "./index";
import type ts from "typescript";
import { type ReactComponentSource } from "../react/react-components";
export declare function getNextSourceComponentsFromDir(sys: NextDevToolsSys, tsProgram: ts.Program): Promise<ReactComponentSource[]>;
