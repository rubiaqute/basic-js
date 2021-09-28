import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (typeof options.separator!="string") options.separator="+";
  if (typeof options.addition=="undefined") options.addition="";
  if (typeof options.additionRepeatTimes=="underfined") options.additionRepeatTimes=0;
  if (typeof options.additionSeparator=="undefined") options.additionSeparator="|";
  if (typeof options.repeatTimes=="underfind") options.repeatTimes=0;
  let adds=options.addition;
  for (let j=0;j<options.additionRepeatTimes-1;j++){
    adds=adds+options.additionSeparator+options.addition;
  }
 let result=str+adds;
 
 

  for (let i=0;i<options.repeatTimes-1;i++){
 result = result+options.separator+str+adds;
  }
  
return result;
  
}
