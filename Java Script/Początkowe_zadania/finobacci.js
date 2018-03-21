function fib(n) {

    if (n == 0) return 0;
    if (n == 1) return 1;
    console.log((n - 1) + (n - 2));
    return fib(n - 1) + (n - 2);
}

function fibFor(n) {
    
    var fn = [0,1];
    console.log("1 ciąg: " + fn[1]);
    for (var i = 2; i < n+1; i++) {
            
        fn[i] = fn[i-1]+fn[i-2];
        console.log(i + " ciąg: " + "" + fn[i-1] + "+" + fn[i-2] + "=" + fn[i]);
    }


}

fibFor(14);
