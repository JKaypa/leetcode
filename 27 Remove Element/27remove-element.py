class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        
        if nums == None:
            return
        
        
        writer = 0
        seeker = 0
        
        while seeker < len(nums):
            if nums[seeker] != val:
                nums[writer] = nums[seeker]
                writer += 1
            
            
            seeker += 1
                
        return writer