let min_max_avg = (arr) => {
    var min = arr[0];
    var max = arr[0];
    var sum  = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] <= min){
            min = arr[i];
        }
        if(arr[i] >= max){
            max = arr[i];
        }
        sum += arr[i];
    }
    var avg = sum/arr.length;
    console.log(`The minimum number is ${min}, the maximum number is ${max}, and the average of all numbers is ${avg}.`)
}