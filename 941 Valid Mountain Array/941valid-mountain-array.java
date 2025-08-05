class Solution {
    public boolean validMountainArray(int[] arr) {
        int n = arr.length;
        
        if(arr == null || n < 3){
            return false;
        }
        
        int i = 1;
        
        while(i < n -1 && arr[i -1] < arr[i]) i++;
        
        int j = i - 1;
        
        while(j < n -1 && j > 0 && arr[j] > arr[j + 1]) j++;
        
        return j == n -1;
            
        
    }
}