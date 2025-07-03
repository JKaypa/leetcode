function findNumbers(nums: number[]): number {
    
    let counter = 0;
    
    const countNumberOfDigits = (num) => {
        let digitCount = 0
        let digits = num
        while(digits > 0){
            digits = Math.floor(digits / 10)
            digitCount++
        }
        
        return digitCount
    }
    
    for(const num of nums){
        const count = countNumberOfDigits(num)
        if(count % 2 === 0){
            counter++
        }
    }
    
    return counter
    
};