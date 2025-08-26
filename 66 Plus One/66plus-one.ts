function plusOne(digits: number[]): number[] {
    const zero = 0
    const one = 1
    const nine = 9
    
    for(let i = digits.length -one; i >= zero; i--){
        if(digits[i] < nine){
            digits[i] += one
            return digits
        } else {
            digits[i] = zero
        }
    }
    
    digits.unshift(one)
    
    return digits
};