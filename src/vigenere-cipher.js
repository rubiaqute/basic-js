import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  
    constructor(mode=true){
      this.mode=mode;
    }
  
  encrypt(message, key) {
    if (message==""|| key==""||typeof message=="undefined"||typeof key=="undefined"){
      throw Error('Incorrect arguments!');
    }
    let vinegereArray= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let result="";
    let index;
    let uppermessage = message.toUpperCase();
    let kindex=0;
    console.log(uppermessage);
    for (let i=0; i<message.length;i++){
      
      
    if (vinegereArray.indexOf(uppermessage[i])>(-1)){
      if (kindex>key.length-1) kindex = kindex-key.length;
      index=(vinegereArray.indexOf(uppermessage[i])+vinegereArray.indexOf(key[kindex].toUpperCase()))%26;
      
      kindex=kindex+1;
      
      result=result+vinegereArray[index].toUpperCase();
      } else result=result+message[i];
    }
    if (this.mode==false) result=result.split("").reverse().join("");
    return result;
  }
  decrypt(encryptedMessage, key) {
   
      if (encryptedMessage==""|| key==""||typeof encryptedMessage=="undefined"|| typeof key=="undefined"){
        throw Error('Incorrect arguments!');
      }
      let vinegereArray= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let result="";
    let kindex=0;
    let index;
    for (let i=0; i<encryptedMessage.length;i++){
      if (vinegereArray.indexOf(encryptedMessage[i])>(-1)){
      if (kindex>key.length-1) kindex = kindex-key.length;

      if (vinegereArray.indexOf(encryptedMessage[i])>vinegereArray.indexOf(key[kindex].toUpperCase())||vinegereArray.indexOf(encryptedMessage[i])==vinegereArray.indexOf(key[kindex].toUpperCase())){
        index = vinegereArray.indexOf(encryptedMessage[i]) - vinegereArray.indexOf(key[kindex].toUpperCase());
      } else {
        index = 26 + vinegereArray.indexOf(encryptedMessage[i]) - vinegereArray.indexOf(key[kindex].toUpperCase());
      }
      kindex=kindex+1;
      
      result=result+vinegereArray[index];
    } else result=result+encryptedMessage[i];
    }
    if (this.mode==false) result=result.split("").reverse().join("");
    return result;
    }
}
