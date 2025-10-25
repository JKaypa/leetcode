function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length -1;
    
    while(left < right){
        const res = target - numbers[left];
        if(res > numbers[right]){
            left++
        } else if(res === numbers[right]){
            return [left + 1, right + 1]
        } else if(res < numbers[right]){
            right--
        }
    }
};