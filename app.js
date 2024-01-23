// 1-masala
// let n = 4 //bu yerga oyning raqamini kiriting
// let result = ""
// 
// switch (n) {
    // case 1:
        // result = 'Yanvar'
        // break;
    // case 2:
        // result = 'Fevral'
        // break;
    // case 3:
        // result = 'Mart'
        // break;
    // case 4:
        // result = 'Aprel'
        // break;
    // case 5:
        // result = 'May'
        // break;
    // case 6:
        // result = 'Iyun'
        // break;
    // case 7:
        // result = "Iyul"
        // break;
    // case 8:
        // result = 'Avgust'
        // break;
    // case 9:
        // result = 'Sentabr'
        // break;
    // case 10:
        // result = 'Oktabr'
        // break;
    // case 11:
        // result = "Noyabr"
        // break;
    // case 12:
        // result = "Dekabr"
        // break;
// 
    // default:
        // result = "Bunday raqamdagi oy mavjud emas!"
        // break;
// }

// 2-masala
// let n = 3
// 
// let result = ""
// 
// switch (n) {
    // case 1:
        // result = 'Qish fasli'
        // break;
    // case 2:
        // result = 'Qish fasli'
        // break;
    // case 3:
        // result = 'Bahor fasli'
        // break;
    // case 4:
        // result = 'Bahor fasli'
        // break;
    // case 5:
        // result = 'Bahor fasli'
        // break;
    // case 6:
        // result = 'Yoz fasli'
        // break;
    // case 7:
        // result = "Yoz fasli"
        // break;
    // case 8:
        // result = 'Yoz fasli'
        // break;
    // case 9:
        // result = 'Kuz fasli'
        // break;
    // case 10:
        // result = 'Kuz fasli'
        // break;
    // case 11:
        // result = "Kuz fasli"
        // break;
    // case 12:
        // result = "Qish fasli"
        // break;
// 
    // default:
        // result = "Bunday raqamdagi fasl mavjud emas!"
        // break;
// }
// 
// console.log(result);

// 3-masala
// let num1 = 100;
// for (let i = 2; i <= num1; i++) {
//   let tub = true;
// 
//   for (let j = 2; j < i; j++) {
    // if (i % j == 0) {
    //   tub = false;
    //   break;
    // }
//   }
// 
//   if (tub) {
    // console.log(i);
//   }
// }

// 4-masala
// let son = +prompt("Inputlar soni");
// let sum = 0;
// 
// for (let i = 0; i <= son; i++) {
//   let num = +prompt(${i}-sonni kiriting);
//   sum += num;
// }
// console.log(sum);

// 5-masala
// let n = +prompt("n ni kiriting:");
// 
// for (let i = n; i >= 1; i--) {
//   console.log(i);
// }

// 7-masala
let number = 51457;
let sum = 0;

while (number > 0) {
  let digit = number % 10;
  sum += digit;
  number = Math.floor(number / 10);
}

console.log("Raqamlar yig'indisi: " + sum + " ga teng");