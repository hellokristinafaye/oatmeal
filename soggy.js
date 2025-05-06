let answer = parseInt(prompt("Enter the number to which you want this app to fizzbuzz to."))

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    }
    
    else {
        console.log(i);
    }
}