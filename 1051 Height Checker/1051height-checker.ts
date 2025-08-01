function heightChecker(heights: number[]): number {
    const expected: Array<number> = heights.toSorted((a: number, b: number) => a - b)
    
    let count: number = 0
    
    for(let i: number = 0; i < heights.length; i++){
        if(expected[i] !== heights[i]){
            count++
        }
    }
    
    return count
};