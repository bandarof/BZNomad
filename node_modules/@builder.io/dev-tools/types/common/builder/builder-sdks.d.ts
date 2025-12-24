import type { SDKVersionInfo } from "../../types";
export declare const SUPPORTED_FRAMEWORKS: {
    react: string;
    remix: string;
    angular: string;
    next: string;
    qwik: string;
    vue: string;
    native: string;
};
export declare function getSDKDetailsForFramework(framework: string): SDKVersionInfo[];
