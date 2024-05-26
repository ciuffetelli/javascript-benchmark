export function insertionSort(arr: number[]) {    

    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        
        let k = i - 1;
        while(k>=0 && arr[k] > key) {
            arr[k+1] = arr[k];
            k--;
        }

        arr[k+1] = key;
    }

    return arr;
}