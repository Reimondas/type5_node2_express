
function makeCamelCase(str) {
  // console.log(str);
const arrFromString = str.split('');
console.log('arrFromString ===', arrFromString);
const arrayAfterProcces = [];
arrFromString.array.forEach((element, idx, arr) => {
  if (element !== '') {
    arrayAfterProcces.push(element);
  } else {
    //padaryti kita raide didziaja
    arr[idx + 1] = arr[idx +1].toUpperCase();
  }
});
// pamazinti pirmos raides case
arrayAfterProcces[0] = arrayAfterProcces[0].toLowerCase();
const stringFromArr = arrayAfterProcces.join('');
console.log('stringFromArr ===', stringFromArr);
}

makeCamelCase('Ar veikia kupranugario case?')

module.exports = {
  makeCamelCase,
};






