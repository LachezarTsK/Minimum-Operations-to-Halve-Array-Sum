
/**
 * @param {number[]} input
 * @return {number}
 */
var halveArray = function (input) {
    if (input.length === 1) {
        return 1;
    }

    const {PriorityQueue} = require('@datastructures-js/priority-queue');
    const maxHeap = new MaxPriorityQueue();
    let sum = 0;

    for (let n of input) {
        sum += n;
        maxHeap.enqueue(n);
    }

    let reduceAmount = 0;
    let numberOfOperations = 0;

    while (reduceAmount < (sum / 2)) {

        let currentMaxHalf = maxHeap.dequeue().element / 2;
        reduceAmount += currentMaxHalf;
        maxHeap.enqueue(currentMaxHalf);
        numberOfOperations++;
    }
    return numberOfOperations;
};
