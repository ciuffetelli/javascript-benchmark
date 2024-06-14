import { selectionSort } from "@/operations/selectionSort";
import { randomArray } from "@/constants/randomArray";

export function testSelectionSort() {   
    return selectionSort(randomArray)
}