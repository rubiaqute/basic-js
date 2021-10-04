import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let sort=[];
  let k;
  let results = [];
 for (let i=0; i<names.length; i++){
   k=0;
   
   for (let j=0;j<i;j++){
     if (names[i]==names[j]) k=k+1;
   }
   if(k>0){
   sort[i] = names[i] + "(" + `${k}` + ")";
   while (results.includes(sort[i]))
    { k=k+1;
      sort[i] = names[i] + "(" + `${k}` + ")";
      console.log(sort[i])
    }
     names[i]=names[i] +"(" + `${k}` + ")";
  }
   
   
   
   results.push(names[i]);
   console.log(results);
   

 }
//    sort[i] = names.filter(item => item==names[i]);
//    if (sort[i].length > 1){
//      let k=1;
//      for (let j=0; j<i; j++){
//       if (names[j]==names[i]) { k=k+1};
//      }
//      if(k>1){
//        names[i]=names[i] + "(" + `${k-1}` + ")";
//        while
//        results.push(names[i])
//      } else results.push(names[i]);
      

//    } else results.push(names[i])
//    console.log(results);
//  }
 return results;
}
