import type { ComponentInfo } from "../../../types";
export declare function initComponentDetailSection(shadow: ShadowRoot): void;
export declare function loadComponentDetail(shadow: ShadowRoot, opt: "load" | "update"): Promise<void>;
export declare function renderComponentDetail(shadow: ShadowRoot, cmpId: string): ComponentInfo | null;
