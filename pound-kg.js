function poundToKg(pound){
    const kg = pound * 0.453592;
    return kg;
}
const inputPound = 4;
const totalKg = poundToKg(inputPound);
console.log(totalKg);

function kgToPound(kg){
    const pound = kg / 2.205;
    return pound;
}
const inputKg = 4;
const totalPound = poundToKg(inputKg);
console.log(totalPound);
