function pivotIndex(nums: number[]): number {
    let leftSum = 0;
    let rightSum = nums.reduce((num1, num2) => num1 + num2);
    
    for(let i = 0; i < nums.length; i++){
        rightSum -= nums[i];
        
        if(leftSum === rightSum){
            return i
        }
        
        leftSum += nums[i];
    }
    
    return -1;
};