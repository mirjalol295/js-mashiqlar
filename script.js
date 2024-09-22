// DARSDA KO’RILADIGAN MASALALAR 

// 1 

// let A = prompt('A qiymatini kiriting')

// let B = prompt('B qiymatini kiriting')

// let Y = -(B/2)*(Math.pow(A,2)+Math.pow(B,2));
// console.log("Y = " + Y);

// 2 

// let A = prompt('A qiymatnoi kiriting') 

// let B = prompt('B qiymatini kiriting')

// let C = prompt('C qiymatini kiriting')

// let D = prompt('D qiymatini kiriting')

// let Y = Math.pow((A+B/C+D), 2) + Math.pow(B,2);

// console.log("Y = " + Y)

// 3

// let A = prompt('A qiymatni kirting');
// let D = prompt('B qiymatni kirting');
// let C = prompt('Cqiymatni kirting');

// let Y = 2 * (Math.pow(A, D) + (4 * Math.pow(C, 2)) / 23);

// console.log(Y);

// 4 

// let A = prompt("A qiymatini kiriting:");
// let B = prompt("B qiymatini kiriting:");
// let C = prompt("C qiymatini kiriting:");
// let D = prompt("D qiymatini kiriting:");

// let Y = 1 / (A ** 2) * (B / 10) ** 3 * (C + D) ** 2;

// console.log("Natija Y:", Y);

// 5

// let A = prompt("A qiymatini kiriting:");
// let B = prompt("B qiymatini kiriting:");
// let C = prompt("C qiymatini kiriting:");
// let D = prompt("D qiymatini kiriting:");

// let Y = (A / B - 1 / C / D - 1) ** 2;

// console.log("Natija Y:", Y);

// 6 

// let A = prompt("A qiymatini kiriting:");
// let B = prompt("B qiymatini kiriting:");
// let C = prompt("C qiymatini kiriting:");
// let D = prompt("D qiymatini kiriting:");

// let Y = A + B / C + D / A + C;

// console.log("Natija Y:", Y);


// 7

// let A = prompt("A qiymatini kiriting:");
// let B = prompt("B qiymatini kiriting:");
// let C = prompt("C qiymatini kiriting:");

// let Y = Math.sqrt(Math.pow(A + B + C, 2) - Math.pow(A - B - C, 2));

// console.log("Natija Y:", Y);


// 8

// let A = prompt("A qiymatini kiriting:");
// let B = prompt("B qiymatini kiriting:");
// let C = prompt("C qiymatini kiriting:");

// let Y = A ** 62 + B ** 2 + C ** 2 / (A * B * C);

// console.log("Natija Y:", Y);

// 9 

// let A = prompt("A qiymatini kiriting:");
// let B = prompt("B qiymatini kiriting:");
// let C = prompt("C qiymatini kiriting:");
// let D = prompt("D qiymatini kiriting:");

// let Y = (A * D ** 3) / 3 + (B * C ** 2) / 2;

// console.log("Natija Y:", Y);

// 10 

// let A = prompt("A qiymatini kiriting:");
// let B = prompt("B qiymatini kiriting:");
// let C = prompt("C qiymatini kiriting:");

// let Y = Math.abs(A / B - B / C) + Math.sqrt(Math.pow(4 * A + C, 4));

// console.log("Natija Y:", Y);


// Boolen darsda ishlanishi kerak bolgan masalalar 

// 1 

// let A = prompt("A sonini kiriting:");
// let condition = A > 0;
// console.log("A soni musbat:", condition);


// 2

// let A = prompt("A sonini kiriting:");
// let condition = A % 2 !== 0;
// console.log("A soni toq son:", condition);

// 3

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let condition = A > 2 && B <= 3;
// console.log("A > 2 va B <= 3:", condition);

// 4

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let C = prompt("C sonini kiriting:");
// let condition = A <= B && B <= C;
// console.log("A <= B <= C:", condition);


// 5 

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let  condition  = (A % 2 === 0 && B % 2 === 0) || (A % 2 !== 0 && B % 2 !== 0);
// console.log("A va B sonlarining har ikkalasi ham toq yoki juft:",  condition );


// 6 

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let C = prompt("C sonini kiriting:");
// let OnePositive = A > 0 || B > 0 || C > 0;
// console.log("A, B, C sonlarning hech bo'lmaganda bittasi musbat:",   OnePositive);


// 7 

// let number = prompt("Uch xonali sonni kiriting:");

// if (number.length === 3) // kiritgan sonning nechta raqami borligini aniqlash
//      {
//     let threeHundred = number[0] !== number[1] && number[0] !== number[2] && number[1] !== number[2];
//     console.log("Ushbu sonning barcha raqamlari har xil:", threeHundred);
// } else {
//     console.log("Iltimos, uch xonali son kiriting.");
// }


// 8 let A = prompt("A sonini kiriting:");

// let B = prompt("B sonini kiriting:");
// let C = prompt("C sonini kiriting:");
// let TwoNumberEqual = A === B || A === C || B === C;
// console.log("Berilgan uchta sonning hech bo'lmaganda 2 tasi teng:", TwoNumberEqual);

// 9 

// let x1 = prompt("Birinchi x koordinatasini kiriting (1-8):");
// let y1 = prompt("Birinchi y koordinatasini kiriting (1-8):");
// let x2 = prompt("Ikkinchi x koordinatasini kiriting (1-8):");
// let y2 = prompt("Ikkinchi y koordinatasini kiriting (1-8):");

// let seeGame = (Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) === 2) || 
//                (Math.abs(x1 - x2) === 2 && Math.abs(y1 - y2) === 1);
// console.log("Farzin bir yurishda bir maydondan ikkinchisiga o'ta oladi:", seeGame);


// Uyga vazifa 

// 1 

// let A = prompt("A sonini kiriting:");
// let goodNumber = A % 2 === 0; // A soni 2 ga bo‘linayotganini tekshirish
// console.log("A soni juft son:", goodNumber);

// 2

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let condition = A >= 0 || B < -2;  // Shartlar orasida 'yoki' mantiqiy operatoridan foydalaniladi
// console.log("A >= 0 yoki B < -2:", condition);


// 3 

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let C = prompt("C sonini kiriting:");
// let ertagaFutbol = (B > A && B < C) || (B < A && B > C);  // B A va C orasida joylashgan bo‘lishi kerak
// console.log("B soni A va C orasida:", ertagaFutbol);

// 4 

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let ErtagaFutbol = A % 2 !== 0 && B % 2 !== 0; // Ikkala son ham toq bo‘lishi kerak
// console.log("A va B sonlari toq:", ErtagaFutbol);


// 5 

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let OneOdd = A % 2 !== 0 || B % 2 !== 0;
// console.log("A va B sonlarining hech bo'lmaganda bittasi toq:", OneOdd);

// 6 

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let onlyOneOdd = (A % 2 !== 0 && B % 2 === 0) || (A % 2 === 0 && B % 2 !== 0); // Faqat bittasi toq bo‘lishi kerak
// console.log("A va B sonlarining faqat bittasi toq:", onlyOneOdd);


// 7 

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let C = prompt("C sonini kiriting:");
// let allCondation = A > 0 && B > 0 && C > 0; // Har uchala son ham musbat bo‘lishi kerak
// console.log("A, B, C sonlarning har biri musbat:", allCondation);

// 8 

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let C = prompt("C sonini kiriting:");
// let onlyOneCondation = (A > 0 && B <= 0 && C <= 0) || 
// (B > 0 && A <= 0 && C <= 0) || 
// (C > 0 && A <= 0 && B <= 0); // Faqat bittasi musbat bo‘lishi kerak
// console.log("A, B, C sonlaridan faqat bittasi musbat:", onlyOneCondation);

// 9 

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let C = prompt("C sonini kiriting:");
// let onlyTwoCondation = (A > 0 && B > 0 && C <= 0) || 
//                          (A > 0 && B <= 0 && C > 0) || 
//                          (A <= 0 && B > 0 && C > 0); // Faqat ikkitasi musbat bo‘lishi kerak
// console.log("A, B, C sonlardan faqat ikkitasi musbat:", onlyTwoCondation);


// 10 

// let number = prompt("Musbat butun sonni kiriting:");
// let onlyTwoNumberEvenTwoDigitEven = number >= 10 && number < 100 && number % 2 === 0; // Ikki xonali va juft bo‘lishi kerak
// console.log("Berilgan son ikki xonali juft son:", onlyTwoNumberEven);


// 11

// let number = prompt("Musbat butun sonni kiriting:");
// let OnlyThreeOdd = number >= 100 && number < 1000 && number % 2 !== 0; // Uch xonali va toq bo‘lishi kerak
// console.log("Berilgan son uch xonali toq:", OnlyThreeodd);


// 12

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let C = prompt("C sonini kiriting:");
// let hasOppositenotation = (A > 0 && B < 0) || (A < 0 && B > 0) || 
//                       (A > 0 && C < 0) || (A < 0 && C > 0) || 
//                       (B > 0 && C < 0) || (B < 0 && C > 0); // Qarama-qarshi belgilarga ega bo‘lishi kerak
// console.log("Hech bo'lmaganda bir jufti o'zaro qarama-qarshi:", hasOppositenotation);


// 13 

// let number = prompt("Uch xonali sonni kiriting:");
// if (number.length === 3) {
//     let digits = String(number).split('').map(Number);
//     let NUmbresZero = digits[0] < digits[1] && digits[1] < digits[2];
//     console.log("Raqamlari ketma-ket o'suvchi:", NUmbresZero);
// } else {
//     console.log("Iltimos, uch xonali son kiriting.");
// }

//  14 

// let number = prompt("Uch xonali sonni kiriting:");
// if (number.length === 3) {
//     let digits = String(number).split('').map(Number);
//     let isIncreasing = digits[0] < digits[1] && digits[1] < digits[2];
//     let isDecreasing = digits[0] > digits[1] && digits[1] > digits[2];
//     console.log("Raqamlari o'suvchi yoki kamayuvchi:", isIncreasing || isDecreasing);
// } else {
//     console.log("Iltimos, uch xonali son kiriting.");
// }

// 15 

// let number = prompt("Uch xonali sonni kiriting:");
// if (number.length === 3) {
//     let isNumberP = number[0] === number[2];
//     console.log("Ushbu son palindrom:", isNumberP);
// } else {
//     console.log("Iltimos, uch xonali son kiriting.");
// }


// Shaxmatga oid masalalar

// 1 

// let x1 = parseInt(prompt("Birinchi maydonning x koordinatasini kiriting (1-8):"));
// let y1 = parseInt(prompt("Birinchi maydonning y koordinatasini kiriting (1-8):"));
// let x2 = parseInt(prompt("Ikkinchi maydonning x koordinatasini kiriting (1-8):"));
// let y2 = parseInt(prompt("Ikkinchi maydonning y koordinatasini kiriting (1-8):"));

// let chessgame = ((x1 + y1) % 2) === ((x2 + y2) % 2);
// console.log("Berilgan maydonlar bir xil rangda:", chessGame);


// 2

// let x1 = parseInt(prompt("Birinchi maydonning x koordinatasini kiriting (1-8):"));
// let y1 = parseInt(prompt("Birinchi maydonning y koordinatasini kiriting (1-8):"));
// let x2 = parseInt(prompt("Ikkinchi maydonning x koordinatasini kiriting (1-8):"));
// let y2 = parseInt(prompt("Ikkinchi maydonning y koordinatasini kiriting (1-8):"));

// let seeChess = (Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1);
// console.log("Ruh bir yurishda o'ta oladi:", seeChess);

// 3

// let x1 = parseInt(prompt("Birinchi maydonning x koordinatasini kiriting (1-8):"));
// let y1 = parseInt(prompt("Birinchi maydonning y koordinatasini kiriting (1-8):"));
// let x2 = parseInt(prompt("Ikkinchi maydonning x koordinatasini kiriting (1-8):"));
// let y2 = parseInt(prompt("Ikkinchi maydonning y koordinatasini kiriting (1-8):"));

// let seeChess = (Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1);
// console.log("Shoh bir yurishda o'ta oladi:", seeChess);

// 4 

// let x1 = parseInt(prompt("Birinchi maydonning x koordinatasini kiriting (1-8):"));
// let y1 = parseInt(prompt("Birinchi maydonning y koordinatasini kiriting (1-8):"));
// let x2 = parseInt(prompt("Ikkinchi maydonning x koordinatasini kiriting (1-8):"));
// let y2 = parseInt(prompt("Ikkinchi maydonning y koordinatasini kiriting (1-8):"));

// let seeChess = Math.abs(x1 - x2) === Math.abs(y1 - y2);
// console.log("Fil bir yurishda o'ta oladi:", seeChess);


// 5 


// let x1 = parseInt(prompt("Birinchi maydonning x koordinatasini kiriting (1-8):"));
// let y1 = parseInt(prompt("Birinchi maydonning y koordinatasini kiriting (1-8):"));
// let x2 = parseInt(prompt("Ikkinchi maydonning x koordinatasini kiriting (1-8):"));
// let y2 = parseInt(prompt("Ikkinchi maydonning y koordinatasini kiriting (1-8):"));

// let seeChess= (Math.abs(x1 - x2) === 2 && Math.abs(y1 - y2) === 1) || 
//                (Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) === 2);
// console.log("Ot bir yurishda o'ta oladi:", seeChess);



