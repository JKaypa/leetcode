/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top = 0
    let right = matrix[0].length -1
    let bottom = matrix.length -1
    let left = 0
    
    const res = []
    
    while(true){
        // top
        for(let i = left; i <= right; i++){
            const num = matrix[top][i]
            res.push(num)
        }
        top++
        if(top > bottom || left > right) return res
        
        // right
        for(let i = top; i <= bottom; i++){
            const num = matrix[i][right]
            res.push(num)
        }
        right--
        if(top > bottom || left > right) return res
        
        // bottom
        for(let i = right; i >= left; i--){
            const num = matrix[bottom][i]
            res.push(num)
        }
        bottom--
        if(top > bottom || left > right) return res
        
        //left
        for(let i = bottom; i >= top; i--){
            const num = matrix[i][left]
            res.push(num)
        }
        left++
        if(top > bottom || left > right) return res
    }
};