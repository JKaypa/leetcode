function generate(numRows: number): number[][] {
    const out = [];
    
    for(let i = 1; i <= numRows; i++){
        if(i === 1){
            out.push([1]);
            continue;
        }
        
        if(i === 2){
            out.push([1, 1]);
            continue;
        }
        
        out.push([1])
        
        for(let j = 1; j < out[i - 2].length; j++){
            const sum = out[i - 2][j] + out[i - 2][j - 1];
            out[i - 1].push(sum);
        }
        
        out[i - 1].push(1);
    }
    
    return out;
};