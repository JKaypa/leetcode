type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let acc = init;

    nums.forEach(num => {
        acc = fn(acc, num);
    })

    return acc;
};