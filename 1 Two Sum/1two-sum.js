/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const addends = new Map()

    for(let i = 0; i < nums.length; i++){
        const addend = target - nums[i]
        
        if(addends.has(addend)){
            const j = addends.get(addend)
            return [i, j]
        }

        addends.set(nums[i], i)
    }

    return -1
};