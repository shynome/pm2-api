interface options {
  /**An arbitrary name that can be used to interact with (e.g. restart) the process later in other commands. Defaults to the script name without its extension (eg “testScript” for “testScript.js”). */
  name:string
  /**The path of the script to run. */
  script:string
  /**A string or array of strings composed of arguments to pass to the script. */
  args:string
  /**A string or array of strings composed of arguments to call the interpreter process with. Eg “–harmony” or [”–harmony”,”–debug”]. Only applies if interpreter is something other than “none” (its “node” by default). */
  interpreterArgs:string
  /**The working directory to start the process with. */
  cwd:string
  /**(Default: “~/.pm2/logs/app_name-out.log”) The path to a file to append stdout output to. Can be the same file as error. */
  output:string
  /**(Default: “~/.pm2/logs/app_name-error.err”) The path to a file to append stderr output to. Can be the same file as output. */
  error:string
  /**The display format for log timestamps (eg “YYYY-MM-DD HH:mm Z”). The format is a moment display format. */
  logDateFormat:string
  /**(Default: “~/.pm2/logs/~/.pm2/pids/app_name-id.pid”) The path to a file to write the pid of the started process. The file will be overwritten. Note that the file is not used in any way by pm2 and so the user is free to manipulate or remove that file at any time. The file will be deleted when the process is stopped or the daemon killed. */
  pid:number
  /**The minimum uptime of the script before it’s considered successfully started. */
  minUptime:number
  /**The maximum number of times in a row a script will be restarted if it exits in less than min_uptime. */
  maxRestarts:number
  /**If sets and script’s memory usage goes about the configured number, pm2 restarts the script. Uses human-friendly suffixes: ‘K’ for kilobytes, ‘M’ for megabytes, ‘G’ for gigabytes’, etc. Eg “150M”. */
  maxMemoryRestart:string
  /**(Default: 1600) The number of milliseconds to wait after a stop or restart command issues a SIGINT signal to kill the script forceably with a SIGKILL signal. */
  killTimeout: number
  /**(Default: 0) Number of millseconds to wait before restarting a script that has exited. */
  restartDelay: number
  /**(Default: “node”) The interpreter for your script (eg “python”, “ruby”, “bash”, etc). The value “none” will execute the ‘script’ as a binary executable. */
  interpreter: string
  /**(Default: ‘fork’) If sets to ‘cluster’, will enable clustering (running multiple instances of the script). See here for more details. */
  execMode: 'fork'|'cluster'
  /**(Default: 1) How many instances of script to create. Only relevant in exec_mode ‘cluster’. */
  instances: number
  /**(Default: false) If true, merges the log files for all instances of script into one stderr log and one stdout log. Only applies in ‘cluster’ mode. For example, if you have 4 instances of ‘test.js’ started via pm2, normally you would have 4 stdout log files and 4 stderr log files, but with this option set to true you would only have one stdout file and one stderr file. */
  mergeLogs: boolean
  /**If set to true, the application will be restarted on change of the script file. */
  watch: boolean
  /**(Default: false) By default, pm2 will only start a script if that script isn’t already running (a script is a path to an application, not the name of an application already running). If force is set to true, pm2 will start a new instance of that script. */
  force: boolean
  cron
  executeCommand
  write
  sourceMapSupport
  disableSourceMapSupport
}