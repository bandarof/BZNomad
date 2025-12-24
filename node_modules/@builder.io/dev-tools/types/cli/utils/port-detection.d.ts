/**
 * Get a free port on the system (>= 40000)
 * Tests ports by attempting to bind to them, ensuring they're actually available
 * Keeps track of recently allocated ports to prevent race conditions
 */
export declare function freePort(): Promise<number>;
export declare function isPortAvailable(port: number): Promise<boolean>;
