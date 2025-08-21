/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // a better optimization Time Big O(n), Space Big O(n)
    const n = nums.length
    const numsMap = new Map()
    const allNumsArr = []
    const output = []
    
    for(const num of nums){
        numsMap.set(num, num)
    }
    
    for(let i = 1; i <= n; i++){
        allNumsArr.push(i)
    }
    
    for(const num of allNumsArr) {
        if(!numsMap.has(num)){
            output.push(num)
        }
    }
    
    return output
};