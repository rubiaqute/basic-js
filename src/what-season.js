import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date ==null) return "Unable to determine the time of year!";
  if (Object.getOwnPropertyNames(date).length>0 || isNaN(Date.parse(date))==true) throw new Error('Invalid date!');

  let month = date.getMonth();
  if (month<2 || month ==11 ) return "winter";
  if(month>7 & month<11) return "autumn";
  if (month <8 & month >4) return "summer";
  if (month <5 & month >1) return "spring";
  
}
