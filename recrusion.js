function fibs(n){
    let arr = [0,1];
    for(let i =0; i< n-2; i++){
        arr.push(arr[arr.length -1] + arr[arr.length -2]);
    }return arr;
}

function fibsRec(n){
if (n < 2) {
        return [1];   
    }
    if (n < 3) {
        return [1, 1];
    }

    var a = fibsRec(n - 1);
    a.push(a[n - 2] + a[n - 3]);
    return a;
}


function mergeSort(array){
    if(array.length<2){
        return array;
    }else{
        let half = Math.ceil(array.length / 2);   
        let left = array.slice(0,half);
        let right = array.slice(half);
        return merge(mergeSort(left),mergeSort(right));
    }
}
function merge(left,right){
    const mergedArray =[];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            mergedArray.push(left.shift());
        }
        else{
            mergedArray.push(right.shift());
        }
    };
    while(left.length){
        mergedArray.push(left.shift());
    };
    while(right.length){
        mergedArray.push(right.shift());
    }
    return mergedArray;
}
let mergeArray = [5,7,2,5,2,4,2]

console.log(mergeSort(mergeArray));
