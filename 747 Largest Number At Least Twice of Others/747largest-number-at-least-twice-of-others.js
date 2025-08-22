/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = -Infinity
    let max2 = max
    let index = -1
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > max){
            max2 = max
            max = nums[i]
            index = i
        } else if(nums[i] < max && nums[i] > max2){
            max2 = nums[i]
        }
    }
    
    return max2 * 2 > max ? -1 : index
};