import toWhole from './towhole';
import { stripIndents } from 'common-tags';

const re = (strs: TemplateStringsArray, ...args: any[]) => 
    new RegExp(toWhole(strs, args));

const regex = (strs: TemplateStringsArray, ...args: any[]) => {
    const full = stripIndents`${toWhole(strs, args)}` 
        .split('\n')
        .map(line => line.replace(/\s+(\/\/\s+[\S]+)/, ''))
        .join('');

    return new RegExp(full);
}

export {
    re,
    regex,   
};
