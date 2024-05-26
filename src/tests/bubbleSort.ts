import { bubbleSort } from "@/operations/bubbleSort";
import { randonArray } from "@/constants/randonArray";

export function testBubbleSort() {   
    return bubbleSort(randonArray)
}