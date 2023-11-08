function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function(list1, list2) {
    if (!list1) {
        return list2;
    }

    if (!list2) {
        return list1;
    }

    let mergedList = new ListNode();
    let current = mergedList;
    let p1 = list1;
    let p2 = list2;

    while (p1 && p2) {
        if (p1.val < p2.val) {
            current.next = p1;
            p1 = p1.next;
        } else {
            current.next = p2;
            p2 = p2.next;
        }
        current = current.next;
    }

    if (p1) {
        current.next = p1;
    }

    if (p2) {
        current.next = p2;
    }

    return mergedList.next;
};

// Example usage
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

let mergedList = mergeTwoLists(list1, list2);

// Access elements of the merged linked list
console.log(mergedList);
