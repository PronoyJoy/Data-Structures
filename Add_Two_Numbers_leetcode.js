// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function numberToList(num) {
    if (num === 0) return new ListNode(0);

    let dummyHead = new ListNode(0);
    let current = dummyHead;

    while (num > 0) {
        current.next = new ListNode(num % 10) // 0 > 243 %10 = 3
        current = current.next // 0 > 3 iterating now current 3 and next node will be 24%10 = 4
        num = Math.floor(num / 10)

    }

    return dummyHead.next


}


var addTwoNumbers = function (l1, l2) {
    // Initialize current node to dummy head of the returning list.

    let dummyHead = new ListNode(o);
    let current = dummyHead;

    let carry = 0; //for sum

    while (l1 !== null || l2 !== null) {
        let sum = carry;

        //clear carry 
        carry = 0;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next
        }

        if (sum >= 10) {
            carry = 1;
            sum = sum % 10;
        }

        // Create a new node with the digit value of sum and attach it to the current node
        current.next = new ListNode(sum);
        current = current.next;
    }

    // If there's any carry left after iterating both lists, create a new node with value 1
    if (carry > 0) {
        current.next = new ListNode(carry);
    }








};

let l1 = numberToList(243);
let l2 = numberToList(465);
console.log(addTwoNumbers(l1, l2));















