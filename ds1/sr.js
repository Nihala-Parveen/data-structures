const num1 = [ 1 , 2 , 3 , 4 ,5 ]
const num2 = [ 6 , 7 , 8, 9 ]
const num = [...num1 , ...num2]
console.log(num);

function hai(...numbers){
    return numbers
}
console.log(hai(num1,num2));