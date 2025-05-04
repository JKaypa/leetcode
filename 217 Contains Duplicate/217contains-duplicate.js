/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const checks = new Set()
    checks.add(nums[0])

    for(let i = 1; i < nums.length; i++){
        if(checks.has(nums[i])){
            return true
        }

        checks.add(nums[i])
    }

    return false
};