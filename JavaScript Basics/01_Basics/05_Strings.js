const name = "Poms";
const count = 332;

console.log(name +" "+ count);  // String Concatination

console.log(`My name is ${name} and my score is ${count}`);  // String Interpolation

const gameName = new String('MrPoms')
console.log(gameName[3])
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0 , 3);
console.log(newString);

const anotherString = gameName.slice(0 , 3);
console.log(anotherString);

const newStringOne = '   MrPoms  ';
console.log(newStringOne);
console.log(newStringOne.trim());  // To remove extra spaces from the string 

const url = 'https://Mr%20Poms.com'
console.log(url.replace('%20', '-'));  // To Find & Repalce From strings
console.log(url.includes('Poms'));   // To search keyword are present in string & indicates value in BOOL.







