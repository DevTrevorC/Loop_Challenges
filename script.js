//print odd numbers from 1-20
function displayOddNumbers() {
    for(var count=1; count <= 20; count++) {
        if(count%2!=0) console.log(count);
    }
}

displayOddNumbers();

//count multiples of 3 down from 100
function countDownThrees() {
    for(var count=100; 0 <= count; count--) {
        if(count%3==0 && count != 0) console.log(count);
    }
}

countDownThrees();

//print the sequence. Is literally just printing elements of an array to the console.
function printArray (arr) {
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

printArray([4, 2.5, 1, -0.5, -2, -3.5]);

//sum of all nums from 1-100
function sumNums() {
    var sum=0;
    for(var i=0; i<=100; i++) sum+=i;
    console.log(sum);
}

sumNums();

//factor nums 1-12 and print the result
function factorNums() {
    var product=1;
    for(var i=1; i<= 12; i++ ) product*=i;
    console.log(product);
}

factorNums();