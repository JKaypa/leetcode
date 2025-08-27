function spiralOrder(matrix: number[][]): number[] {
    let length = matrix.length * matrix[0].length;
    
    let topStart = 0;
    let topEnd = matrix[0].length;
    
    let rightStartStatic = matrix[0].length -1
    let rightStartDynamic = 1
    let rightEnd = matrix.length -1
    
    let buttomStartStatic = matrix.length -1;
    let buttomStartDynamic = matrix[0].length -1
    let buttomEnd = 0
    
    let leftStartStatic = 0
    let leftStartDynamic = matrix.length -2
    let leftEnd = 0
    
    
    const output = []
    
    while(length > 0){
        // top row
        for(let i = topStart; i < topEnd; i++){
            const num = matrix[topStart][i];
            output.push(num)
            length--;
        }
        topStart++;
        topEnd--;
        
        if(length <= 0) return output
        
        // right column
        for(let i = rightStartDynamic; i < rightEnd; i++){
            const num = matrix[i][rightStartStatic];
            output.push(num)
            length--;
        }
        rightStartStatic--;
        rightStartDynamic++
        rightEnd--;
        
        if(length <= 0) return output
        
        // buttom row
        for(let i = buttomStartDynamic; i >= buttomEnd; i--){
            const num = matrix[buttomStartStatic][i]
            output.push(num)
            length--
        }
        buttomStartStatic--
        buttomStartDynamic--
        buttomEnd++
        
        if(length <= 0) return output
        
        // left column
        for(let i = leftStartDynamic; i > leftEnd; i--){
            const num = matrix[i][leftStartStatic]
            output.push(num)
            length--
        }
        leftStartStatic++
        leftStartDynamic--
        leftEnd++
    }
    
    return output
};