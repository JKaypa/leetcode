function findMaxConsecutiveOnes(nums: number[]): number {
    let aux = 0;
    let max = 0;
    
    for(let num of nums){
        if(num === 1){
            aux++;
        } else if(aux > max){
            max = aux;
            aux = 0;
        } else {
            aux = 0;
        }
        
    }
    
    if(aux > max){
        max = aux;
    }
    
    return max;
};