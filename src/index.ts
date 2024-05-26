import { runBubbleSort } from "./runs/bubbleSort";
import { runInsertSort } from "./runs/insertSort";
import { runSelectionSort } from "./runs/selectionSort";

const result = [];

result.push(runBubbleSort());
result.push(runSelectionSort());
result.push(runInsertSort());

(async () => {

    const solution = await Promise.all(result);
    const duration = solution.reduce((acc, item) => {
        return acc + item.duration;
    }, 0)

    console.log({
        result: {
            s: duration/1000,
            ms: duration,
        },
        resume: solution
    });
})()
