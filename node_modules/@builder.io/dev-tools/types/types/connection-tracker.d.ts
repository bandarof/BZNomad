import type { Duplex } from "stream";
import type { DevToolsSys } from "../types";
/**
 * Tracks active WebSocket connections to prevent memory leaks
 */
export declare class ConnectionTracker {
    private connections;
    private maxConnections;
    private sys;
    private healthCheckInterval;
    private readonly HEALTH_CHECK_INTERVAL_MS;
    constructor(sys: DevToolsSys);
    /**
     * Add a connection to tracking
     */
    addConnection(socket: Duplex, req?: any): boolean;
    /**
     * Remove a connection from tracking
     */
    removeConnection(socket: Duplex): void;
    /**
     * Get current connection count
     */
    getConnectionCount(): number;
    /**
     * Clean up all connections
     */
    cleanup(): void;
    /**
     * Start health monitoring for connections
     */
    private startHealthMonitoring;
    /**
     * Stop health monitoring
     */
    private stopHealthMonitoring;
    /**
     * Perform health check on all connections
     */
    private performHealthCheck;
}
