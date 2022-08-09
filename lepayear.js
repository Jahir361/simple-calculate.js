// function islepaYear(year){
//     if(year % 4 === 0){
//         console.log('this year is  lepayear');
//         // return true;
//     }
//     else 
//         console.log('this year is not a leapyear');
//         // return false;
// }
// const year = 2024;
// const isleap = islepaYear(year);


function islepaYear(year){
    const remainder = year % 4;
    if ( remainder === 0 ){
        return true;
    }
    else {
        return false ;
    }
}
const yearInput = islepaYear(2015);
console.log(yearInput);



