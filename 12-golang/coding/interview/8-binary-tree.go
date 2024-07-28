package main

type Node struct {
	val   int
	left  *Node
	right *Node
}

func Insert(root *Node, val int) *Node {
	if root == nil {
		return &Node{val: val, left: nil, right: nil}
	}

	if val < root.val {
		root.left = Insert(root.left, val)
	} else {
		root.right = Insert(root.right, val)
	}

	return root
}

func Search(root *Node, val int) bool {
	if root == nil {
		return false
	}

	if val == root.val {
		return true
	} else if val < root.val {
		return Search(root.left, val)
	} else {
		return Search(root.right, val)
	}

}

func InOrder(node *Node) []int {
	var result []int
	var traversal func(node *Node)

	traversal = func(node *Node) {
		if node != nil {
			traversal(node.left)
			result = append(result, node.val)
			traversal(node.right)
		}
	}

	traversal(node)

	return result
}