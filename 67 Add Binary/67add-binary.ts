function addBinary(a: string, b: string): string {
    let aIndex = a.length -1;
    let bIndex = b.length -1;
    
    let resBin = "";
    let carry = 0;
    
    while(aIndex >=0 || bIndex >= 0){
        let i = 0
        let j = 0
        
        if(aIndex >= 0){
            i = parseInt(a.at(aIndex))
        }
        
        if(bIndex >= 0){
            j = parseInt(b.at(bIndex))
        }
        
        
        const res = i + j + carry
        
        if(res < 2){
            resBin += res
            carry = 0
        } else if(res === 3){
            carry = 1
            resBin += '1'
        } 
        else {
            carry = 1
            resBin += '0'
        }
        
        aIndex--
        bIndex--
    }
    
    if(carry){
        resBin += carry
    }
    
    return resBin.split('').reverse().join('')
};