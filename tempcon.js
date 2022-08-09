function celsToFr(cels){
    const fr = cels * 9/5 + 32;
    return fr;
}
const celsiusIs = 20;
const infr = celsToFr(celsiusIs);
console.log(infr, 'Fahrenheit');