// const str1 = "shreyash";

// console.log(str1);

// const str2 = "shreyash";
// const arr = ["s", "h", "r", "e", "y"];

// for (const itt of str2) {
//   console.log(itt);
// }

// for (const itt of arr) {
//   console.log(itt);
// }

// const obj = {
//   [Symbol.iterator]: function () {
//     let step = 0;
//     const iterator = {
//       next: function () {
//         step++;
//         if (step === 1) {
//           return { value: "hello", done: false };
//         } else if (step === 2) {
//           return { value: "world", done: false };
//         }
//         return { value: undefined, done: true };
//       },
//     };
//     return iterator;
//   },
// };

// for (const word of obj) {
//   console.log(word);
// }


// function* generatorFunction(){
//     yield 'hello'
//     yield 'world'
// }

// const generatorObject = generatorFunction()
// for(const word of generatorObject){
//     console.log(word)
// }

// function greet(name){
//     console.log(`Hello ${name}`)
// }

// setTimeout(greet, 2000, 'shreyash')


const promise = new promise((resolve, reject) => {
    setTimeout(() = > {
        resolve()
    }, 5000)
})