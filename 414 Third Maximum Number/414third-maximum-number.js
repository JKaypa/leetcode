/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    let max = max2 = max3 = null
    console.log(max, max2, max3)
    
    for(const num of nums){
        if(max === null || num > max){
            max3 = max2
            max2 = max
            max = num
        } else if(max2 === null || (num < max && num > max2)){
            max3 = max2
            max2 = num
        } else if(max3 === null || (num < max2 && num > max3)){
            max3 = num
        }
    }
    
    return max3 !== null ? max3 : max
};