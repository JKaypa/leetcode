function findDisappearedNumbers(nums: number[]): number[] {
    // worst optimization verion
    
    let isDisappeared = true;
    
    const nums2 = []
    const output = []
    
    const n = nums.length
    
    for(let i = 1; i <= n; i++){
        nums2.push(i)
    }
    
    for(let i = 0; i < nums2.length; i++){
        isDisappeared = true
        
        for(let j = 0; j < n; j++){
            if(nums2[i] === nums[j]){
                isDisappeared = false
            }
        }
        
        if(isDisappeared){
            output.push(nums2[i])
        }
    }
    
    return output
};