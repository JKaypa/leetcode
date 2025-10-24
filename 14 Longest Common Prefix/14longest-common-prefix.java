class Solution {
    public String longestCommonPrefix(String[] strs) {
        Arrays.sort(strs);
        
        StringBuilder prefix = new StringBuilder();
        
        String firstString = strs[0];
        String lastString = strs[strs.length-1];
            
        int length1 = firstString.length();
        int length2 = lastString.length();
        
        int min = Math.min(length1, length2);
        
        for(int i = 0; i < min; i++){
            if(firstString.charAt(i) == lastString.charAt(i)){
                prefix.append(firstString.charAt(i));
            } else {
                return prefix.toString();
            }
        }
        
        return prefix.toString();
        
    }
}