// simple interest  calcultion 

function siInterest(number){
    let yearss = 2;
    let neew = number/100 *5 * yearss;
    let totalInterest = number + neew;
    return totalInterest ;
    // console.log(totalInterest);

}
const principleAmount = 2000;
const result = siInterest(principleAmount);
console.log(result);


console.log((2 ** 3) ** 2);

// compound Interest calcultion

function compoubdInterst(number){
    let compuntCal = number * ((1+9/100) ** 2);
    // let ke = number*(Math.pow(1+9/100,2));
    let totalInterest = compuntCal - number;
    return totalInterest;
   
}
const comPrincipalAmount = 2000;

const total = compoubdInterst(comPrincipalAmount);
console.log('investing with',comPrincipalAmount,'Intrest of Compund will :',total.toFixed(2));