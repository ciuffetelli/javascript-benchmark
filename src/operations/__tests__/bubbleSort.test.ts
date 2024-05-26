import { bubbleSort } from "../bubbleSort";

describe('bubbleSort', () => {
   it('should gives [123456]', async () => {
    expect(bubbleSort([4,5,6,2,1,3])).toEqual([1,2,3,4,5,6]);
   }); 
   it('should gives [1223456]', async () => {
    expect(bubbleSort([4,2,5,6,2,1,3])).toEqual([1,2,2,3,4,5,6]);
   }); 
});