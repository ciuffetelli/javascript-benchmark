import { measurement } from "@/utils/measurement";
import { testBubbleSort } from "@/tests/bubbleSort";
import { Run, complexity } from "@/types";

export const runBubbleSort: Run = async () => {
    return {
        Algorithm: 'Bubble sort',
        duration: await measurement(testBubbleSort),
        complexity: complexity.Hight
    }
}