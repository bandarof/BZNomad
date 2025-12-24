import type { ComponentInfo, ComponentRegistry, DevToolsSys } from "../types";
import type { CLIArgs } from "./index";
import { type FigmaComponentInfo, type UserContext } from "$/ai-utils";
export declare const runFigmaGenerate: (sys: DevToolsSys, args: CLIArgs) => Promise<undefined>;
export interface MappingCodeV3 {
    figmaNode?: FigmaComponentInfo;
    registry?: ComponentRegistry;
    userContext?: UserContext;
    figmaUrl?: string;
    docsUrl?: string;
    registeredCmp?: ComponentInfo;
    previousCompletion?: string;
    userPrompt?: string;
    token?: string;
    pragma?: string;
}
