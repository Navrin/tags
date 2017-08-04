import * as i18n from 'i18n';
import toWhole from './towhole';

const i18ntag = (str: TemplateStringsArray, ...args: any[]) => 
    i18n.__(toWhole(str, args));

export default i18ntag;