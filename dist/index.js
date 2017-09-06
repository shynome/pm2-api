"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pify = require("pify");
const pm2_1 = require("pm2");
class API extends pm2_1.custom {
    /**
     * Main Function to be imported
     * can be aliased to PM2
     *
     * To use it when PM2 is installed as a module:
     *
     * var PM2 = require('pm2');
     *
     * var pm2 = PM2(<opts>);
     */
    constructor(opts) {
        super(opts);
        /**
         * Connect to PM2
         * Calling this command is now optional
         */
        this.connect = pify(super.connect);
        /**
         * Usefull when custom PM2 created with independent flag set to true
         * This will cleanup the newly created instance
         * by removing folder, killing PM2 and so on
         */
        this.destroy = pify(super.destroy);
        /**
         * Disconnect from PM2 instance
         * This will allow your software to exit by itself
         */
        this.disconnect = pify(super.disconnect);
        /**
         * Launch modules
         */
        this.launchModules = pify(super.launchModules);
        /**
         * Enable bus allowing to retrieve various process event
         * like logs, restarts, reloads
         */
        this.launchBus = pify(super.launchBus);
        /**
         * Exit methods for API
         */
        this.exitCli = pify(super.exitCli);
        ////////////////////////////
        // Application management //
        ////////////////////////////
        /**
         * Start a file or json with configuration
         */
        this.start = pify(super.start);
        /**
         * Reset process counters
         */
        this.reset = pify(super.reset);
        /**
         * Update daemonized PM2 Daemon
         */
        this.update = pify(super.update);
        /**
         * Graceful Reload an application
         */
        this.gracefulReload = pify(super.gracefulReload);
        /**
         * Reload an application
         */
        this.reload = pify(super.reload);
        /**
         * Restart process
         */
        this.restart = pify(super.restart);
        /**
         * Delete process
         */
        this.delete = pify(super.delete);
        /**
         * Stop process
         */
        this.stop = pify(super.stop);
        /**
         * Get list of all processes managed
         */
        this.list = pify(super.list);
        /**
         * Kill Daemon
         */
        this.killDaemon = pify(super.killDaemon);
        /**
         * Kill Daemon
         */
        this.kill = pify(super.killDaemon);
    }
}
exports.API = API;
exports.pm2 = new API;
exports.default = exports.pm2;
//# sourceMappingURL=index.js.map