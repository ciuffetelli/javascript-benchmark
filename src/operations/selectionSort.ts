export function selectionSort(arr: number[]) {
    
    let iSmaller: null | number = null;
    let aux: null | number = null;

    for(let i = 0; i < arr.length; i++){

        iSmaller = i;

        for (let k = i+1; k < arr.length; k++) {
            arr[k] < arr[iSmaller] && (iSmaller = k);           
        }

        aux = arr[i];
        arr[i] = arr[iSmaller];
        arr[iSmaller] = aux;
    }

    return arr;
}