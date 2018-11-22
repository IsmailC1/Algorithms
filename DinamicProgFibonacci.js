// function fib(n ,memo= []){
//     if(memo[n] !== undefined) return memo[n];
//     if(n <=2 ) return 1;
//     var res=fib(n-1, memo) + fib(n-2,memo);
//     memo[n] = res;
//     return fib(n-1) + fib(n-2);
// }

function fib(n, memo=[undefined,1,1]){
    if(memo[n] !== undefined) return memo[n];
    var res =fib(n-1, memo) + fib(n-2,memo);
    memo[n] = res;
    return res;
    
}


// Aproximation of big O is O(2^N) wich is very bad. Even the worst caste.