/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const strDigit = digits.join('');
    const bigDigit = BigInt(strDigit) + BigInt(1);    
    
    return bigDigit.toString().split('').map(Number)
};