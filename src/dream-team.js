import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let dreamname=[];
  if (members==null) return false;
  else{
  for (let i=0; i<members.length; i++){
  
  if ((typeof members[i] =='string')) {
    let pos = members[i].search(/\w[a-z]/i);
  dreamname.push(members[i][pos].toUpperCase());
  }
  }
  dreamname.sort()
  return dreamname.join("");
}
}
