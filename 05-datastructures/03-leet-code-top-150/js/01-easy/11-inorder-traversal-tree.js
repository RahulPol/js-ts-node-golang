/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Another Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Function to perform inorder traversal
var inOrderTraversal = function (root) {
  let res = [];

  function traverse(node) {
    if (node !== null) {
      traverse(node.left);
      res.push(node.val);
      traverse(node.right);
    }
  }

  traverse(root);
  return res;
};
