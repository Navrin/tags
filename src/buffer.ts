import toWhole from './towhole';
const buffer = (strs: TemplateStringsArray, ...args: any[]) => 
    Buffer.from(toWhole(strs, args));

export default buffer;
