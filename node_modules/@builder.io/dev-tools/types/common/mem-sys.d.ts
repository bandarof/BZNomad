import type { DevToolsSys } from "../types";
export declare function createDevToolsSys(opts: CreateDevToolsSysOptions): Promise<DevToolsSys>;
export interface CreateDevToolsSysOptions extends Partial<DevToolsSys> {
    /**
     * TypeScript compiler instance.
     */
    ts: any;
}
