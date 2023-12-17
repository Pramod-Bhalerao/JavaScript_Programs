const marvel_Heros = ["Thor", "IronMan", "Hulk"];
const Dc_Heros = ["SuperMan", "BatMan", "AquaMan"];

marvel_Heros.push(Dc_Heros); // In this case Dc_Heros array is set as 4th elements of marvel_Heros.
console.log(marvel_Heros); // See Output

console.log(marvel_Heros[3][2]);
// But we access this 4th elements of arrays elements.

const all_Heros = marvel_Heros.concat(Dc_Heros); // join to arrays together
console.log(all_Heros);

const all_Heros2 = [...marvel_Heros, ...Dc_Heros]; // (Spred operator) by this array elements get spread indivisually and make one new array
console.log(all_Heros2);

const newArr = [1, 2, [4, 5], 6, [7, 8, [9, 10], 11], 12];
const newArr2 = newArr.flat(Infinity); // return new array with all its sub-elements concatenated into specified depth
console.log(newArr2);

console.log(Array.isArray("MrPoms"));
console.log(Array.from("MrPoms"));
console.log(Array.from({ name: "Poms" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
