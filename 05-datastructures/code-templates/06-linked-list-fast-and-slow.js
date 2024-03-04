// Linked list: fast and slow pointer

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let fn = (head) => {
  let slow = head;
  let fast = head;
  let ans = 0;

  while (fast && fast.next) {
    // do logic
    slow = slow.next;
    fast = fast.next.next;
  }

  return ans;
};
