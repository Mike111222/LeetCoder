let twoSum = function(nums, target) {
    // Create a new Map to store elements and their indices
    let hashMap = new Map();
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement value
        let complement = target - nums[i];
        
        // Check if the complement exists in the hashMap
        if (hashMap.has(complement)) {
            // If complement exists, return the indices of the two numbers
            return [hashMap.get(complement), i];
        }
        
        // Add the current element and its index to the hashMap
        hashMap.set(nums[i], i);
    }
    
    // If no solution is found, return an empty array
    return [];
};
