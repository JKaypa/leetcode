/**
 Do not return anything, modify arr in-place instead.
 **/

function duplicateZeros(arr: number[]): void {   
    let countZero = 0
    
    for(let num of arr) {
        if (num === 0) {
            countZero++
        }
    }
    
    const n = arr.length
    const fakeLen = n + countZero
    let pointer = fakeLen - 1

    for(let i = n - 1; i < pointer; i--, pointer--){
        if(arr[i] === 0){
            if(pointer < n){
                arr[pointer] = arr[i]
            }
            
            pointer--
            
            if(pointer < n){
                arr[pointer] = arr[i]
            }
        } else if(pointer < n){
            arr[pointer] = arr[i]
        }
    }

    
    
};