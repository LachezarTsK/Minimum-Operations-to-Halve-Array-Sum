
#include <queue>
#include <vector>
using namespace std;

class Solution {
    
public:

    int halveArray(vector<int>& input) {
        if (input.size() == 1) {
            return 1;
        }

        priority_queue<double> maxHeap;
        double sum = 0;

        for (const auto& n : input) {
            sum += n;
            maxHeap.push(n);
        }

        double reduceAmount = 0;
        int numberOfOperations = 0;

        while (reduceAmount < (sum / 2)) {

            double currentMaxHalf = maxHeap.top() / 2;
            maxHeap.pop();
            reduceAmount += currentMaxHalf;
            maxHeap.push(currentMaxHalf);
            numberOfOperations++;
        }
        return numberOfOperations;
    }
};
