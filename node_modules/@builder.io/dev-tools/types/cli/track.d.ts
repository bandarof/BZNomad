import * as Amplitude from "@amplitude/analytics-node";
import * as Sentry from "@sentry/node";
export declare function initTracking(verbose: boolean): Promise<typeof Sentry>;
export declare function track(eventName: string, options: Record<string, any>): Promise<Amplitude.Types.Result>;
export declare function setUserId(id: string): Promise<void>;
