import { insertionSort } from "@/operations/insertionSort";
import { randomArray } from "@/constants/randomArray";

export function testInsertSort() {   
    return insertionSort(randomArray)
}