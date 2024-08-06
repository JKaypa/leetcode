function runningSum(nums: number[]): number[] {
    const sum: number[] = [nums[0]]
    let acc = nums[0]
    for (let i = 1; i < nums.length; i++){
        acc += nums[i]
        sum.push(acc)
    }
    return sum
};