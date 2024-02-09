/**
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
 */

// solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // this is a classic two pointer problem
  // ptr1 to list1 and ptr2 to list2
  // traverse lists until one of ptr reaches end
  // while traversing compare ptr1 value and ptr2 value
  // whichever is smaller add it to resulting list
  // later check ptr1 & ptr2 and append the pending list items

  let ptr1 = list1;
  let ptr2 = list2;
  let result = new ListNode();
  let ans = result;

  while (ptr1 != undefined && ptr2 != undefined) {
    if (ptr1.val < ptr2.val) {
      result.next = new ListNode(ptr1.val, undefined);
      ptr1 = ptr1.next;
    } else {
      result.next = new ListNode(ptr2.val, undefined);
      ptr2 = ptr2.next;
    }
    result = result.next;
  }

  while (ptr1 != undefined) {
    result.next = new ListNode(ptr1.val, undefined);
    ptr1 = ptr1.next;
    result = result.next;
  }

  while (ptr2 != undefined) {
    result.next = new ListNode(ptr2.val, undefined);
    ptr2 = ptr2.next;
    result = result.next;
  }

  return ans.next;
};

// solution - recursive
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
