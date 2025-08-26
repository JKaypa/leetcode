function findDiagonalOrder(mat: number[][]): number[] {
    const m = mat.length;
    const n = mat[0].length;
    const diagonals = new Map<number, number[]>();
    const output = Array<number>();
    
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            const sum = i + j;
            if(!diagonals.has(sum)){
                diagonals.set(sum, []);
            }
            
            diagonals.get(sum).push(mat[i][j]);
        }
    }
    
    for(const [key, value] of diagonals){
        if(key % 2 === 0){
            const reversed = value.reverse();
            output.push(...reversed);
        } else {
            output.push(...value);
        }
    }
    
    return output;
};