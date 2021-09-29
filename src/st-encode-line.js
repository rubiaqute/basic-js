import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let result="";
  let quantity=1;
  for (let i=0; i<(str.length-1); i++){
    console.log(quantity);
    if (str[i]==str[i+1]) {
      quantity=quantity+1;
      console.log(quantity);
      if (i==str.length-2&&quantity>1) result=result+String(quantity)+str[i];
      if (i==str.length-2&&quantity<2) result=result+str[i];
    } else{
      if (quantity>1) {
        result=result+String(quantity)+str[i];
      } else result=result+str[i];
      quantity=1;
      if (i==str.length-2) result =result+str[i+1];
      
      
    }
  } return result;
}
