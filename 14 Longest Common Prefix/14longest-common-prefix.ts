function longestCommonPrefix(strs: string[]): string {
    
    if(strs.length === 1){
        return strs[0]
    }
    
    let ref = strs[0];
    let refIndex = 0;
    
    for(let i = 1; i < strs.length; i++){
        if(strs[i].length < ref.length){
            ref = strs[i]
            refIndex = i
        }
    }
    
    let prefix = "";
    
    
    for(let i = 0; i < strs.length; i++){
        if(refIndex === i){
            continue
        }
        
        for(let j = 0; j < ref.length; j++){            
            if(strs[i][j] === ref[j] && prefix.length === j){
                prefix += ref[j]
            }
            
            else if(strs[i][j] !== ref[j] && j === 0){
                return prefix = ""
            }
            
            else if(strs[i][j] !== ref[j]){
                prefix = prefix.substring(0, j)
                ref = ref.substring(0, j)
                break
            }
        }
    }
    
    return prefix
};