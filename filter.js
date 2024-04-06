// Write a function called filterNumbers that takes an array of numbers as an argument 
// and returns a new array containing only the even numbers and print it.

let even=[];
function filterNumbers(n) {
 
    for(let i=0;i<n.length;i++){
        if(n[i]%2==0){
            even.push(n[i]);
        }
    }
}

const n = [1, 2, 3, 4, 5, 10];
filterNumbers(n);

console.log(even);