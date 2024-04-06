// Create a function called squareNumbers that takes an array of numbers as an 
// argument and returns a new array where each element is the square of the 
// corresponding element in the input array and print it.

let squared=[];
function squareNumbers(n){
    for(let i=0;i<n.length;i++){
        squared.push(n[i]**2);      
    }
    
}
no=[1,2,3,4]
squareNumbers(no);
console.log(squared);