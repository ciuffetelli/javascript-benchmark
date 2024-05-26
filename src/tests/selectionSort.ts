import { selectionSort } from "@/operations/selectionSort";
import { randonArray } from "@/constants/randonArray";

export function testSelectionSort() {   
    return selectionSort(randonArray)
}