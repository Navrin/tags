import { execSync } from "child_process";
import toWhole from './towhole';

const sh = (strs: TemplateStringsArray, ...args: any[]) => 
    execSync(toWhole(strs, args)).toString().trim();

export default sh;
