// 1* 2* 3* 4* 5* 6* 7
// function fectorial(number){
//     let result = 1;
//     for( i=1; i<=number; i++){
//         result = result * i; 
//     }
//     return result ;
// }

// const result = fectorial(7);
// console.log(result);

function fectorial2(number){
    let result=1;
    for (i = number; i >= 1; i--){
        result = result * i;
    }
    return result;
}
const nagativeFt = fectorial2(8);
console.log(nagativeFt);