/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length -1;
    
    while(left < right){
        const leftElement = s[left];
        const rightElement = s[right];
        
        s[left] = rightElement;
        s[right] = leftElement;
        
        left++
        right--
    }
};