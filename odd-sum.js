// function oddSum(numbers){
//     sum = 0;    
//     for (i=0; i < numbers.length ; i++ ){
        
//         const sum =sum[i];
//         return sum;
//     }
// }
// const numbers = [5, 7, 8, 10, 45, 30];
// const toatlSum =oddSum(numbers);


function oddArraySum(number){
    sum =0;
 for(let i=0 ; i < number.length; i++){
    const index = i;
    const element = number[i]
    sum = sum + element;
    // console.log(index)
 }   
 return sum ;
}

function findOddNumbers(number){
    oddElement = [];
    for(let i = 0; i<number.length; i++){
        const index = i ;
        const element = number[index];
        if(element % 2 !== 0 ){
            console.log(index,element);
            oddElement.push(element);
        }
    }
    return oddElement;
}

// const MyNumbrs = [23,54,86,13,87,423,08,434];
const hello = [32,76,45,76,32,12,20,10,98,15,19,27];
const oddNumbers = findOddNumbers(hello);
oddArraySum(oddNumbers);
console.log('total sum odd number :', sum);