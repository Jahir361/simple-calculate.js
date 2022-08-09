const nafiInchis = 60 ;
const nafiFeet = nafiInchis/12;
console.log(nafiFeet);

const jahirInchis = 80;
const jahirFeet = jahirInchis/12;
console.log( jahirFeet.toFixed(2));

// using function call
function inchToFeet(inch){
    const toFeet = inch/12;
    return toFeet
}
const inputInches = 90;
const result = inchToFeet(inputInches);
console.log('Your Hight : ',result, 'Feets');


function cmToFeet(cm){
    const feet = cm/ 30.48;
    return feet;
}
const inputCm = 250;
const resultInfeet = cmToFeet(inputCm);
console.log('your Hight is :',resultInfeet.toFixed(2) ,'Feet');