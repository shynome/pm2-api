export interface processDescription {
  [key:string]:any  
  /**The name given in the original start command. */
  name:string
  /**The pid of the process. */
  pid:number
  /**The pid for the pm2 God daemon process. */
  pm_id:number
  monit:{
    /**The number of bytes the process is using. */
    memory:number
    /**The percent of CPU being used by the process at the moment. */
    cpu:number
  }
  pm2_env:{
    [key:string]:any
    /**The working directory of the process. */
    pm_cwd:string
    /**The stdout log file path. */
    pm_out_log_path:string
    /**The stderr log file path. */
    pm_err_log_path:string
    /**The interpreter used. */
    exec_interpreter:string
    /**The uptime of the process. */
    pm_uptime:number
    /**The number of unstable restarts the process has been through. */
    unstable_restarts:number
    restart_time:number
    status: "online"|"stopping"|"stopped"|"launching"|"errored"|"one-launch-status"
    /**The number of running instances. */
    instances:number
    /**The path of the script being run in this process. */
    pm_exec_path:string
  }
}