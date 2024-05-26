import { insertionSort } from "@/operations/insertionSort";
import { randonArray } from "@/constants/randonArray";

export function testInsertSort() {   
    return insertionSort(randonArray)
}