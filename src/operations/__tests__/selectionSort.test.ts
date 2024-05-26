import { selectionSort } from "../selectionSort";

describe('selectionSort', () => {
    it('should gives [123456]', async () => {
        expect(selectionSort([3,6,4,2,1,5])).toEqual([1,2,3,4,5,6]);
    });
    it('should gives [1223456]', async () => {
        expect(selectionSort([3,6,4,2,1,2,5])).toEqual([1,2,2,3,4,5,6]);
    });
});