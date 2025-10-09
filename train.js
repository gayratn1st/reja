// TASK-F

function findDoublers(str) {

  const doubler = new Set();     
  for (let i = 0; i < str.length; i++) {
    const founddoubler = str[i];
    if (doubler.has(founddoubler)) {
      return true;
    }
    doubler.add(founddoubler);      
  }
  return false;              
}
console.log(findDoublers("hello")); //tog'ri
console.log(findDoublers("abc")); //xoto
console.log(findDoublers("12321")); //tog'ri










// // TASK-E 

// function getReverse(str) {
//   return str.split('').reverse().join('');  // used  almost similar  actions as the previous one , but .reverse() instead of splitting 
// }

// console.log(getReverse('hello'))

// console.log(getReverse('Gayratjon'))

// console.log(getReverse('조네스'))






// // TASK-D

// function checkContent(a, b)
//  {
//   if (typeof a !== 'string' || typeof b !== 'string') 
//     return false;

//   const sortirovka = s => s.split('').sort().join('');  //ajratib , tartibga keltirish , keyin qayta qushish , to make them kinda same 

//   return sortirovka(a)=== sortirovka(b); // birhil bo'lganligini tekshirish 
// }

// console.log(checkContent("mitgroup", "gmtiprou")); //true
// console.log(checkContent("gayratjon", "jongayrat"));  //true

// console.log(checkContent("gayratjon", "abror")); //false




// TASk-C
// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   qoldiq() {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     console.log(`Hozir ${hours}:${minutes}da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola mavjud`);
//   };

//  sotish(product, amount) {
//   if (this[product] !== undefined) {
//     if (this[product] >= amount) {
//       this[product] -= amount;
//       console.log(`${amount}ta ${product} sotildi`);
//     } else {
//       console.log(`Warning: Buncha ${product} bu yerda yo'q`);
//     }
//   } else {
//     console.log(`Bunday mahsulot mavjud emas: ${product}`);
//   } };

// qoshish(product, amount) {
//   if (this[product] !== undefined) {
//     this[product] += amount;
//     console.log(`${amount}ta ${product} qo'shildi`);
//   } else {
//     console.log(`Bunday mahsulot mavjud emas: ${product}`);
//   }
// }  

// }
// // console.log(cart)
// const shop = new Shop(4 ,5 ,2);
// shop.qoldiq();
// shop.sotish("non" , 3);
// shop.qoshish("cola",4);  
// shop.qoldiq();
// notice , I use help of ai for this 








// TASK-B 

// function numberCounter(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     let ele = str[i]; 
//     if (ele >= '0' && ele <= '9') {
//       count++;
//     }
//   }
//   return count;
// }

//   console.log(numberCounter('22eihr44jdscn324'))
//   console.log(numberCounter('пвадылдьва'))
//   console.log(numberCounter('123456789'))
  
  







// TASK-A


// function letterCounter(letter, word) 
// {
//   return word.split('')
//   .filter(a => a === letter)
//   .length;  };

// console.log(letterCounter("s", "webter")); // there's no S in word
// console.log(letterCounter("s", "websters")); // There is S in word
// console.log(letterCounter("o", "webster"));  // there is letter which word doesn't contain



















// TODO: CALLBACK 
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yahshi talaba boling", // 0–20
//     "togri boshliq tanlang va koproq hato qiling", // 20–30
//     "uzingizga ishlashni boshlang", // 30–40
//     "siz kuchli bolgan narsalarni qiling", // 40–50
//     "yoshlarga investitsiya qiling", // 50–60
//     "endi dam oling, foydasi yoq endi", // 60
// ];

//                                         CALLBACK FUNCT
// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a >= 0 && a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function(){
//             callback(null , list[5]);
//         },5000)
//     }
// }

// console.log('passed 0')
// maslahatBering(89, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("javob:", data);
//     }
// });


// console.log('passed 1')

// TODO:                                                    Async functions 

// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() =>{
//              resolve(list[5]);   
//             },5000);
//         });
//     }
// }

// console.log("passed here 0");

// Catch then orqali call qilish 
// maslahatBering(25)
//     .then((data) => {
//         console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });

// console.log("passed here 1");


// Async await orqali 
// async function run() {
//     let javob = await maslahatBering(36);
//     console.log(javob);
//     javob = await maslahatBering(26);
//     console.log(javob);
//     javob = await maslahatBering(72);
//     console.log(javob);
//     javob = await maslahatBering(10);
//     console.log(javob);
// }
// run();