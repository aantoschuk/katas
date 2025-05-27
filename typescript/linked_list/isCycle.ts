/* Leetcode: 141.Linked List Cycle
 *
 * Given the head of a linked list, determine if the list contains a cycle.
 * A cycle occurs when a node's next pointer points to a previous node in the list.
 * Return true if a cycle exists, otherwise return false.
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

const hasCycle = (head: ListNode | null) => {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
};
