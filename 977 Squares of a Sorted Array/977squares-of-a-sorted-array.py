class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        squared_nums = []
        
        for num in nums:
            squared_nums.append(num ** 2)
            
        squared_nums.sort()
        
        return squared_nums