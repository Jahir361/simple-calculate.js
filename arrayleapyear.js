
// Problems Two
function arrayLeapYear(number){
    leapYears=[];
    for(i = 0; i< number.length; i++ ){
        const index = i;
        const element = number[i];
        if(element % 4 === 0 ){
            leapYears.push(element);
            // console.log(leapYears);
        }
    }
    return leapYears;
}

let allYears = [2023,2024,2025,2028,2030];
let result = arrayLeapYear(allYears);
console.log('this Years is LeapYear:',result);


// Problem one
function hoursToMinutes(number){
    const result = number * 60;
    return result;
}
let hourse = [3];
let final = hoursToMinutes(hourse);
console.log(final);