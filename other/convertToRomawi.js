/* Melakukan konversi bilangan menjadi angka romawi dengan nilai minimal 1 dan maksimal 3999 */
const romawi = [
    { 'romaji': 1, 'value': ['i', 'I'] },
    { 'romaji': 2, 'value': ['ii', 'II'] },
    { 'romaji': 3, 'value': ['iii', 'III'] },
    { 'romaji': 4, 'value': ['iv', 'IV'] },
    { 'romaji': 5, 'value': ['v', 'V'] },
    { 'romaji': 6, 'value': ['vi', 'VI'] },
    { 'romaji': 7, 'value': ['vii', 'VII'] },
    { 'romaji': 8, 'value': ['viii', 'VIII'] },
    { 'romaji': 9, 'value': ['ix', 'IX'] },
    { 'romaji': 10, 'value': ['x', 'X'] },
    { 'romaji': 20, 'value': ['xx', 'XX'] },
    { 'romaji': 30, 'value': ['xxx', 'XXX'] },
    { 'romaji': 40, 'value': ['xl', 'XL'] },
    { 'romaji': 50, 'value': ['l', 'L'] },
    { 'romaji': 60, 'value': ['lx', 'LX'] },
    { 'romaji': 70, 'value': ['lxx', 'LXX'] },
    { 'romaji': 80, 'value': ['lxxx', 'LXXX'] },
    { 'romaji': 90, 'value': ['xc', 'XC'] },
    { 'romaji': 100, 'value': ['c', 'C'] },
    { 'romaji': 200, 'value': ['cc', 'CC'] },
    { 'romaji': 300, 'value': ['ccc', 'CCC'] },
    { 'romaji': 400, 'value': ['cd', 'CD'] },
    { 'romaji': 500, 'value': ['d', 'D'] },
    { 'romaji': 600, 'value': ['dc', 'DC'] },
    { 'romaji': 700, 'value': ['dcc', 'DCC'] },
    { 'romaji': 800, 'value': ['dccc', 'DCCC'] },
    { 'romaji': 900, 'value': ['cm', 'CM'] },
    { 'romaji': 1000, 'value': ['m', 'M'] },
    { 'romaji': 2000, 'value': ['mm', 'MM'] },
    { 'romaji': 3000, 'value': ['mmm', 'MMM'] },
]
function toRomawi(number) {
    let numberInt = 0;
    try {
        numberInt = parseInt(number)
        if (isNaN(numberInt)) {
            numberInt = 0;
        }
    } catch (error) {
        return 0;
    }
    if (numberInt >= 4000 || numberInt <= 0) {
        console.log('Maximum less than 4000 and minimum more than 0');
        return null;
    }
    let romawi_val = '';
    for (let i = romawi.length - 1; i >= 0; i--) {
        if (numberInt >= romawi[i].romaji) {
            romawi_val += romawi[i].value[1];
            // return romawi[i].romaji;
            numberInt -= romawi[i].romaji;
        }
        if (numberInt <= 0) {
            break;
        }
    }
    return romawi_val;
}

console.log(toRomawi("273"));
console.log(toRomawi("2999"));
console.log(toRomawi("3023"));
console.log(toRomawi("91"));