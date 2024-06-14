import { measurement } from "@/utils/measurement";
import { testInsertSort } from "@/tests/insertSort";
import { Run, complexity } from "@/types";

export const runJavascriptSort: Run = async () => {
    return {
        Algorithm: 'Javascript default sort',
        duration: await measurement(testInsertSort),
        complexity: complexity.Hight
    }
}