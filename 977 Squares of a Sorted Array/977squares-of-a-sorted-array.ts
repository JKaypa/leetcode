function sortedSquares(nums: number[]): number[] {
    const abs: number[] = [];
    
    for(let num of nums){
        abs.push(num ** 2);
    }
    
    return abs.toSorted((a: number, b: number) => a - b)
    
};