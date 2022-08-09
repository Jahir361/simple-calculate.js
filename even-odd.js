function even_odd(inputNum){
    if ( inputNum % 2 === 0 ){
        console.log('number is even')
    }
    else 
        console.log('your number is odd')
    function totalSum (){

    }
}
const input = 25;
const final = even_odd(input);


function islepaYear(year){
    const remainder = year % 2;
    if ( remainder === 0 ){
        return true;
    }
    else {
        return false ;
    }
}
const yearInput = islepaYear(2015);
console.log(yearInput);
