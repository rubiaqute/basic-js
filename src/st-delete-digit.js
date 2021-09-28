import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let string=String(n);
  console.log(string);
  let max=Number(string.replace(string[0],""));
  console.log(max);
  for(let i=1;i<string.length;i++){
if (Number(string.replace(string[i],""))>max){
  max=Number(string.replace(string[i],""));
}

  }return max;
}
