class Solution {
    public int maxProfit(int[] prices) {
        int profit = 0;
        int priceStock = prices[0];

        for(int i = 1; i < prices.length; i++){
            if(prices[i] < priceStock){
                priceStock = prices[i];
            } else if(prices[i] - priceStock > profit){
                profit = prices[i] - priceStock;
            }
        }

        return profit;
    }
}