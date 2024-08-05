/*
169. Majority Element
Solved
Easy
Topics
Companies
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2


Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109


Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

package main

func majorityElement(nums []int) int {
	eleCountMap := make(map[int]int)
	maxCount, maxElement := 0, nums[0]

	for _, v := range nums {
		eleCountMap[v]++
	}

	for k, v := range eleCountMap {
		if v > maxCount {
			maxCount = v
			maxElement = k
		}
	}

	return maxElement
}

// better solution
func majorityElementV2(nums []int) int {
	var ans int
	var count int

	// 2,2,1,1,1,2,2
	for _, num := range nums {
		if count == 0 {
			ans = num
		}
		if num == ans {
			count++
		} else {
			count--
		}
	}

	return ans
}