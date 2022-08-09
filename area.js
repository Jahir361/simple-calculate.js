function areaInSf(acre){
    const sf = acre * 43560;
    return sf;
}
const acre = 3;
const totalSf = areaInSf(acre);
console.log('total SF : ', totalSf);