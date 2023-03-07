// Variable
const name = "Abdurrahman Ziyad";
const age = 21;
const isMarried = false;

const greeting = `
Hai nama saya : ${name}
Umur saya : ${age}
`;

console.log(greeting);

// Conditional
const nilai = 80;

if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 80) {
  console.log("B");
} else if (nilai >= 70) {
  console.log("C");
} else if (nilai >= 60) {
  console.log("D");
} else {
  console.log("E");
}

// Looping For
for (let i = 1; i <= 10; i = i + 2) {
  console.log(i);
}

// Looping While
let j = 1;
while (j <= 10) {
  console.log(j);
  j = j + 3;
}

// Function

// Declaration
function hitungUmur(tahunLahir) {
  const tahunSkrg = 2023;
  const umur = tahunSkrg - tahunLahir;
  return umur;
}
console.log(hitungUmur(2000));

// Expression
const hitungUmurMhs = function (tahunLahir) {
  const tahunSkrg = 2023;
  const umur = tahunSkrg - tahunLahir;
  return umur;
};

console.log(hitungUmurMhs(2001));

// Arrow
const hitungUmurDsn = (tahunLahir) => {
  const tahunSkrg = 2023;
  const umur = tahunSkrg - tahunLahir;
  return umur;
};
console.log(hitungUmurDsn("1980"));

// Array
let animals = ["Ayam", "Kucing", "Anjing"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

for (const animal of animals) {
  console.log(`Hewan : ${animal}`);
}

// Object : key&value

let user = {
  name: "Ziyad",
  umur: 21,
  tinggi: 170,
};

console.log(user.name, user.umur, user.tinggi);

for (const key in user) {
  console.log(`Key : ${key} | Value : ${user[key]}`);
}
