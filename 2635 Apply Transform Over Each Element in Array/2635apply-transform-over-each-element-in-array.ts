function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const arr2 = []
    for(let i = 0; i < arr.length; i++){
        const res = fn(arr[i], i);
        arr2.push(res)
    }

    return arr2;
};