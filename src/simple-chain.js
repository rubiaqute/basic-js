import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
 
  
  chainvalue: [],
  result:[],
  getLength() {
  return this.chainvalue.length;
  },
  addLink(value) {
    this.chainvalue.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position!='number'||position<1||this.chainvalue.indexOf(this.chainvalue[position])==-1||position>(this.chainvalue.length-1)){
      this.chainvalue.splice(0,this.chainvalue.length);
      throw Error("You can't remove incorrect link!");
    
       
       
    }
    this.chainvalue.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.chainvalue.reverse();
    return this;
  },
  finishChain() {
    let result = this.chainvalue.join("~~");
    this.chainvalue.splice(0,this.chainvalue.length);
    console.log(this.chainvalue);
    return result;
   
    
   
    
  }
  
}

