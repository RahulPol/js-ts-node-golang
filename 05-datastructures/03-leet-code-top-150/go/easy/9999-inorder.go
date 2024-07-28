package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func InOrder(node *TreeNode) []int {
	var result []int
	var traversal func(node *TreeNode)

	traversal = func(node *TreeNode) {
		if node != nil {
			traversal(node.Left)
			result = append(result, node.Val)
			traversal(node.Right)
		}
	}
	
	return result
}