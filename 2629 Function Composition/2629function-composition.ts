type F = (x: number) => number;

function compose(functions: F[]): F {

    return function(x) {
        if(!functions.length) return x

        let res = x;

        for(let f = functions.length -1; f >= 0; f--){
            res = functions[f](res)
        }

        return res;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */