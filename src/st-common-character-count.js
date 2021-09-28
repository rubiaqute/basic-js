import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let count=0;
  const length=s1.length;
  if(s1==0||s2==0) {
    return 0
  } else{
  for (let i=0;i<length;i++){
    if (s2.includes(s1[i])){
      
      s2=s2.replace(new RegExp(s1[i]),"");
      s1=s1.replace(new RegExp(s1[i]),"");
      i=i-1;
      count=count+1;
      
    }
}
  
return count;
  }
}

