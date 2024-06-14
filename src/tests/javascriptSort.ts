import { javascriptSort } from "@/operations/javascriptSort";
import { randomArray } from "@/constants/randomArray";

export function testInsertSort() {   
    return javascriptSort(randomArray)
}