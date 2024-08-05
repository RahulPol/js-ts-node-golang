package main

import (
	"sort"
	"unicode"
)

func isSameTree(p *TreeNode, q *TreeNode) bool {
	if p == nil && q == nil {
		return true
	}
	if p == nil || q == nil || p.Val != q.Val {
		return false
	}

	return isSameTree(p.Left, q.Left) && isSameTree(p.Right, q.Right)
}

func isValid(s string) bool {
	if len(s) == 0 || len(s)%2 == 1 {
		return false
	}

	pairs := map[rune]rune{
		'(': ')',
		'{': '}',
		'[': ']',
	}
	stack := []rune{}

	for _, r := range s {
		if _, ok := pairs[r]; ok {
			stack = append(stack, r)
		} else if len(stack) == 0 || pairs[stack[len(stack)-1]] != r {
			return false
		} else {
			stack = stack[:len(stack)-1]
		}
	}

	return len(stack) == 0
}

func isAnagram(s string, t string) bool {
	chars := make(map[rune]int)

	for _, v := range s {
		chars[v]++
	}

	for _, v := range t {
		chars[v]--
	}

	for _, v := range chars {
		if v != 0 {
			return false
		}
	}

	return true
}

func isSubsequence(s string, t string) bool {
	cur := 0
	for i := 0; i < len(t); i++ {
		if cur < len(s) && t[i] == s[cur] {
			cur++
		}
	}

	return cur == len(s)
}

func isPalindrome(s string) bool {
	for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
		for i < j && !(unicode.IsLetter(rune(s[i])) || unicode.IsDigit(rune(s[i]))) {
			i++
		}
		for i < j && !(unicode.IsLetter(rune(s[j])) || unicode.IsDigit(rune(s[j]))) {
			j--
		}
		if i == j {
			break
		}
		if unicode.ToLower(rune(s[i])) != unicode.ToLower(rune(s[j])) {
			return false
		}
	}
	return true
}

func strStr(haystack string, needle string) int {

    for i := 0; i < len(haystack); i++ {
        if len(needle) + i > len(haystack) {
            return -1
        } else if haystack[i:len(needle)+i] == needle {
            return i
        }
    }
    return -1
}


func longestCommonPrefix(strs []string) string {
	if len(strs) == 1 { // handle only 1 element
	  return strs[0]
	}
  
	// sort them first, the most different one will be in first and last
	sort.Strings(strs)
  
	// compare first and last
	l := len(strs)
	for i := range(strs[0]) {
		if strs[0][i] != strs[l-1][i] {
			return strs[0][:i]
		}
	}
	return strs[0]
}

func lengthOfLastWord(s string) int {
    n := len(s)
    result := 0
    for n > 0 {
        n--
        if s[n] != ' ' {
            result++
        } else if result > 0 {
            return result
        }
    }
    return result
}


func maxProfitV2(prices []int) int {
    // Check if the prices slice is empty
    if len(prices) == 0 {
        return 0 // If it's empty, return 0 as there can be no profit
    }
    
    // Initialize variables for tracking maximum profit and buying amount
    maxProfit := 0 // Initialize maximum profit to 0
    buyingAmount := prices[0] // Initialize buying amount to the first price in the slice

    // Iterate through the prices array
    for _, price := range prices {
        // Check if the current price is less than the buying amount
        if price < buyingAmount {
            buyingAmount = price // If so, update the buying amount to the current price
        } else { // Otherwise, if the current price is greater than or equal to the buying amount
            // Calculate the profit if selling at the current price
            profit := price - buyingAmount
            // Update the maximum profit if the profit from selling at the current price is greater
            if profit > maxProfit {
                maxProfit = profit
            }
        }
    }

    // Return the maximum profit obtained
    return maxProfit
}

func majorityElementV3(nums []int) int {
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


func removeDuplicates(nums []int) int {
    if len(nums) == 0 {
        return 0
    }

    // Using two pointers approach
    // i points to the last unique element
    // j iterates through the array
    i := 0
    for j := 1; j < len(nums); j++ {
        if nums[j] != nums[i] {
            i++
            nums[i] = nums[j]
        }
    }

    return i + 1
}


func removeElementV2(nums []int, val int) int {
    i := 0
    for _, num := range nums {
        if num != val {
            nums[i] = num
            i++
        }
    }
    return i
}

func mergeV3(nums1 []int, m int, nums2 []int, n int)  { 
    var ptr1, ptr2, ptr3 int = m-1, n-1, m+n-1
    for ; ptr1 >= 0 && ptr2 >= 0; ptr3-- {
        if nums2[ptr2] >= nums1[ptr1] {
            nums1[ptr3] = nums2[ptr2]
            ptr2--
        } else {
            nums1[ptr3] = nums1[ptr1]
            ptr1--
        }
    }
    
    if ptr2 >= 0 {
        copy(nums1[:ptr3+1], nums2[:ptr2+1])
    }
}

func InOrderV2(node *TreeNode) []int {
	var result []int
	var traversal func(node *TreeNode)

	traversal = func(node *TreeNode) {
		if node != nil {
			traversal(node.Left)
			result = append(result, node.Val)
			traversal(node.Right)
		}
	}

	traversal(node)

	return result
}




func search(nums []int, target int) int {
	pivot := findPivot(nums)

	var low int
	var high int

	// If the pivot index is -1, then the array is not rotated
	// Hence we can search the entire array
	if pivot == -1 {
		low = 0
		high = len(nums) - 1
	// If the target is less than the first element in the array,
	// then the target must be in the right half of the array
	} else if target < nums[0] {
		low = pivot
		high = len(nums) - 1
	// If the target is greater than the first element in the array,
	// then the target must be in the left half of the array
	} else {
		low = 0
		high = pivot - 1
	}

	// Binary search for the target
	for low < high {
		mid := (low + high) / 2

		if nums[mid] == target {
			return mid
		} else if nums[mid] < target {
			low = mid + 1
		} else {
			high = mid
		}
	}

	// Check if the target is at the low index
	if nums[low] == target {
		return low
	}
	return -1
}

// Find the pivot index if it exists, return -1 otherwise
func findPivot(nums []int) int {
	// Since all elements in the array are unique,
	// if the array is rotated, the first element will be greater than the last element.
	// Hence we can do an early return if the first element is less than the last element.
	if nums[0] < nums[len(nums)-1] {
		return -1
	}

	// Binary search for the pivot index
	// The element at the pivot index will be the largest element in the array
	reference := nums[0]

	low := 0
	high := len(nums) - 1

	for low < high {
		mid := (low + high) / 2

		// If the element at the mid index is greater than the reference element,
		// then the pivot index must be to the right of the mid index
		if nums[mid] >= reference {
			low = mid + 1
		// If the element at the mid index is less than the reference element,
		// then the pivot index must be to the left of the mid index
		} else  {
			high = mid
		}
	}

	return low
}

func twoSumV2(nums []int, target int) []int {
    m := make(map[int]int)
    for i, num := range nums {
        complement := target - num
        if j, ok := m[complement]; ok {
            return []int{j, i}
        }
        m[num] = i
    }
    return nil
}



func mergeV2(nums1 []int, m int, nums2 []int, n int) {
    // Pointers for nums1, nums2, and the end of merged array in nums1
	i, j, k := m-1, n-1, m+n-1

	// Merge in reverse order
	for i >= 0 && j >= 0 {
		if nums1[i] > nums2[j] {
			nums1[k] = nums1[i]
			i--
		} else {
			nums1[k] = nums2[j]
			j--
		}
		k--
	}

	// If there are remaining elements in nums2
	for j >= 0 {
		nums1[k] = nums2[j]
		k--
		j--
	}
}
