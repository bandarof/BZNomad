export declare function requestJSON<T>(opts: RequestOptions): Promise<T>;
export interface RequestOptions {
    url: URL;
    headers?: Record<string, string>;
    method: string;
    body?: any;
}
