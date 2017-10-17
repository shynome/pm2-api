import *as pify from "pify";
import { custom as pm2_API } from "pm2";

export type options = {
  /**override pm2 cwd for starting scripts */
  cwd?: string,
  /**pm2 directory for log, pids, socket files */
  pm2_home?: string,
  /**unique PM2 instance (random pm2_home) */
  independent?: string,
  /**should be called in the same process or not */
  daemon_mode?: string,
  /**keymetrics bucket public key */
  public_key?: string,
  /**keymetrics bucket secret key */
  secret_key?: string,
  /**keymetrics instance name */
  machine_name?: string,
}

export type bus = any

/**exit code for terminal */
export type Integer = number

/**Application Name / Process id / Application file / 'all' */
export type process_name = string

/**Application Name or All */
export type appname = string|number|object

/**Application Name / Process id / JSON application file / 'all' */
export type cwd = appname|'all'

/**script to start or json */
export type startOpts = object|string

export type opts = any

/**Extra options to be updated */
export type updateOpts = object

export type monit = {
  cpu: number,
  memory: number,
}

import { processDescription } from "./processDescription";

export type pm2_env = any

export type appRunStatus = 'stopped'|'online'|'error'

export type appStatus = {
  name: string,
  pm_id: number,
  pm2_env: pm2_env,
  restart_time: number,
  status: appRunStatus,
}

export class API extends pm2_API {

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
constructor(opts?:options){ super(opts) }

/**
 * Connect to PM2
 * Calling this command is now optional
 */
connect:()=>Promise<any>
= pify(super.connect)

/**
 * Usefull when custom PM2 created with independent flag set to true
 * This will cleanup the newly created instance
 * by removing folder, killing PM2 and so on
 */
destroy:()=>Promise<any>
= pify(super.destroy)

/**
 * Disconnect from PM2 instance
 * This will allow your software to exit by itself
 */
disconnect:()=>Promise<any>
= pify(super.disconnect)

/**
 * Launch modules
 */
launchModules:()=>Promise<any>
= pify(super.launchModules)

/**
 * Enable bus allowing to retrieve various process event
 * like logs, restarts, reloads
 */
launchBus:()=>Promise<bus>
= pify(super.launchBus)

/**
 * Exit methods for API
 */
exitCli:(code:Integer)=>Promise<any>
= pify(super.exitCli)

////////////////////////////
// Application management //
////////////////////////////

/**
 * Start a file or json with configuration
 */
start:(opts:startOpts)=>Promise<any>
= pify(super.start)

/**
 * Reset process counters
 */
reset:()=>Promise<any>
= pify(super.reset)

/**
 * Update daemonized PM2 Daemon
 */
update:()=>Promise<any>
= pify(super.update  )

/**
 * Graceful Reload an application
 */
gracefulReload:(process_name?:appname,opts?:opts)=>Promise<any> 
= pify(super.gracefulReload)

/**
 * Reload an application
 */
reload:(process_name?:appname,opts?:opts)=>Promise<any> 
= pify(super.reload )

/**
 * Restart process
 */
restart:(cmd:cwd,opts?:updateOpts)=>Promise<any>
= pify(super.restart)

/**
 * Delete process
 */
delete:(process_name:cwd)=>Promise<appStatus[]>
= pify(super.delete)

/**
 * Stop process
 */
stop:(process_name:cwd)=>Promise<any>
= pify(super.stop)

/**
 * Get list of all processes managed
 */
list:(opts?:any)=>Promise<processDescription[]>
= pify(super.list)

/**
 * Kill Daemon
 */
killDaemon:()=>Promise<any>
= pify(super.killDaemon)

/**
 * Kill Daemon
 */
kill:()=>Promise<any>
= pify(super.killDaemon)

}
export const pm2 = new API
export default pm2