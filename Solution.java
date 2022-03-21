
import java.util.Collections;
import java.util.PriorityQueue;

public class Solution {

    public int halveArray(int[] input) {
        if (input.length == 1) {
            return 1;
        }

        PriorityQueue<Double> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        double sum = 0;

        for (double n : input) {
            sum += n;
            maxHeap.add(n);
        }

        double reduceAmount = 0;
        int numberOfOperations = 0;

        while (reduceAmount < (sum / 2)) {
            
            double currentMaxHalf = maxHeap.poll() / 2;
            reduceAmount += currentMaxHalf;
            maxHeap.add(currentMaxHalf);
            numberOfOperations++;
        }
        return numberOfOperations;
    }
}
