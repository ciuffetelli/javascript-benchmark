import { bubbleSort } from "@/operations/bubbleSort";
import { randomArray } from "@/constants/randomArray";

export function testBubbleSort() {   
    return bubbleSort(randomArray)
}