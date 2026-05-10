// Difference between the Largest and smallest Number

// Input : [4,9,1,7]
// output: 8

function Difference(arr) {
    let max = arr[0];
    let min = arr[0];

    for(let i=1; i< arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
        if (arr[i]< min) {
            min = arr[i];
        }
    }
    return max - min;

}

console.log(Difference([4,9,1,7]));
