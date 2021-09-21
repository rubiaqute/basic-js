import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error ("'arr' parameter must be an instance of the Array!")
  let newarr=[];
  let check=0;
  let flag=0;
  for (let i=0;i<arr.length; i++){
      
      if (arr[i]=='--double-next'& (i+1<arr.length)) {newarr.push(arr[i+1]);}
      //if (arr[i+1]==undefined) newarr.splice(i+1,1);
      else {
        if (arr[i]=='--discard-prev' & i!=0) {newarr.splice(i-1,1);}         
        
            else{ if (arr[i]=='--double-prev'& i!=0&arr[i-2]!='--discard-next') {newarr.push(newarr[i-1]);}
                  else{  if (arr[i-1]!='--discard-next'&arr[i]!='--discard-next'&arr[i]!='--double-prev'&arr[i]!='--discard-prev'&arr[i]!='--double-next')newarr.push(arr[i]);
      
                     }
            }
          }
        }
            
                 
      
      
        
      
  
  

  return newarr;
}
