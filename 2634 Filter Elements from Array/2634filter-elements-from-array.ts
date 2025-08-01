type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const filteredArr = [];

    arr.forEach((num, i) => {
        
        if(fn(num, i)){
            filteredArr.push(num)
        }
    
    })
    return filteredArr;
};