const toWhole = (target: TemplateStringsArray, args: any[]) => 
    target.map((v, i) => v + (args[i] || ''))
          .join('');

export default toWhole;