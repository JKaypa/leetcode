function thirdMax(nums: number[]): number {
    
    let max = -Infinity
    let secondMax = max
    let thirdMax = secondMax
    
    for(const num of nums){
        if(num > max) {
            thirdMax = secondMax
            secondMax = max
            max = num
        } else if(num < max && num > secondMax){
            thirdMax = secondMax
            secondMax = num
        } else if(num < secondMax && num > thirdMax){
            thirdMax = num
        }
    }
    
    const isThirdMaxExist = thirdMax !== -Infinity
    
    return isThirdMaxExist ? thirdMax : max
    
};