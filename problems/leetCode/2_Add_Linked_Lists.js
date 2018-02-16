// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

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
var addTwoNumbers = function(l1, l2) {
    let sum = [];
    let carry = 0;
    while (l1 || l2 || carry) {
        if (!l1 && !l2) {
            if (carry) sum.push(carry)
            carry = 0;
            return sum
        }
        else if (!l1) {
            // todo: pull this out into helper function
            let digitSum = l2.val + carry;
            if (digitSum > 9) {
                carry = 1;
                sum.push(digitSum % 10);
            } else {
                carry = 0;
                sum.push(digitSum);
            }
        }
        else if (!l2) {
            let digitSum = l1.val + carry;
            if (digitSum > 9) {
                carry = 1;
                sum.push(digitSum % 10);
            } else {
                carry = 0;
                sum.push(digitSum);
            }
        } else {
            let digitSum = l1.val + l2.val + carry;
            if (digitSum > 9) {
                carry = 1;
                sum.push(digitSum % 10);
            } else {
                carry = 0;
                sum.push(digitSum);
            }
        }
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return sum;
};

console.log(addTwoNumbers)