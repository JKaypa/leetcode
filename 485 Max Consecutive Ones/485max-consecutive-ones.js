/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {  
    let maxCount = 0;
    let auxCount = 0;
    
    for(let num of nums){
        if(num === 1){
            auxCount++
        } else if(auxCount > maxCount){
            maxCount = auxCount
            auxCount = 0
        } else {
            auxCount = 0
        }
    }
    
    if(auxCount > maxCount){
        maxCount = auxCount
    }
    
    return maxCount
};