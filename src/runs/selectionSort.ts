import { measurement } from "@/utils/measurement";
import { testSelectionSort } from "@/tests/selectionSort";
import { Run, complexity } from "@/types";

export const runSelectionSort: Run = async () => {
    return {
        alghorytim: 'Selection sort',
        duration: await measurement(testSelectionSort),
        complexity: complexity.Hight
    }
}