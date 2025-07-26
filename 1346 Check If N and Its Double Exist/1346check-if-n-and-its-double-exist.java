class Solution {
    public boolean checkIfExist(int[] arr) {
        Map<Integer, Integer> doubles = new HashMap<Integer, Integer>();
        
        for(int num:arr){            
            int doubl = num * 2;
            Integer half = num % 2 == 0 ? num / 2 : null;
            
            if(doubles.containsKey(doubl) || doubles.containsKey(half)){
                return true;
            }
            
            doubles.put(num, doubl);
        }
        
        return false;
    }
}