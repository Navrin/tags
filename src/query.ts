import toWhole from './towhole';

const query = (strs: TemplateStringsArray, ...args: any[]) =>
    document.querySelectorAll(toWhole(strs, args));

export default query;
 