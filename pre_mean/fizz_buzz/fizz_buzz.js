const fizz_buzz = n => {
    if(n <= 0 || n != Number){
        console.log("Parameter must be a positive number greater than zero!")
    }
    else{
        for(var i = 1; i <= n; i++){
            if(i % 3 === 0 && i % 5 === 0){
                console.log("FizzBuzz");
            }
            else if(i % 3 === 0){
                console.log("Fizz");
            }
            else if(i % 5 === 0){
                console.log("Buzz");
            }
            else{
                console.log(i);
            }
        }
    }
}