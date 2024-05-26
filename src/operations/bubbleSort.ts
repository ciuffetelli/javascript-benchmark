export function bubbleSort(arr: number[]) {

    let aux: null | number = null;
    
    for(let i = 0; i < arr.length; i++){
        for(let k = 0; k < arr.length -1; k++){
              if(arr[i] < arr[k]) {
                aux = arr[i];
                arr[i] = arr[k];
                arr[k] = aux;
              }  
        }
    }

    return arr;
}