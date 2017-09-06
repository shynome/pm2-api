import *as pify from "pify";
import *as pm2 from "pm2";
//pm2.connect
export const connect:()=>Promise<void>
= pify(pm2.connect)