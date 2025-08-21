/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // a better optimization Time Big O(n), Space Big O(n)
    const n = nums.length
    const numsMap = new Map()
    const output = []
    
    for(const num of nums){
        numsMap.set(num, num)
    }
    
    const allNumsArr = Array.from({length: n}, (_, i) => ++i)
    
    for(const num of allNumsArr) {
        if(!numsMap.has(num)){
            output.push(num)
        }
    }
    
    return output
};