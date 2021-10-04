import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
 let macadress=n.split("-");
 let reg =new RegExp("[0-9A-F]{2}");
 if (macadress.length != 6)return false;
   for (let i=0; i<6; i++){
     console.log(reg.test(macadress[i]));
     console.log(n[i]);
   if (reg.test(macadress[i])==false) return false;
}
return true

}
