import { measurement } from "@/utils/measurement";
import { testInsertSort } from "@/tests/insertSort";
import { Run, complexity } from "@/types";

export const runInsertSort: Run = async () => {
    return {
        Algorithm: 'Insert sort',
        duration: await measurement(testInsertSort),
        complexity: complexity.Hight
    }
}