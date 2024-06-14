import { runBubbleSort } from "./runs/bubbleSort";
import { runInsertSort } from "./runs/insertSort";
import { runJavascriptSort } from "./runs/javascriptSort";
import { runSelectionSort } from "./runs/selectionSort";

const result = [];

// SORT
result.push(runJavascriptSort());
result.push(runBubbleSort());
result.push(runSelectionSort());
result.push(runInsertSort());

export default (async () => {  

    const solution = await Promise.all(result);
    const duration = solution.reduce((acc, item) => {
        return acc + item.duration;
    }, 0)

    console.log({
        result: {
            s: duration/1000,
            ms: duration,
        },
        summaries: solution
    });
})()