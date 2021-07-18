// const amount  = 12;

// if(amount<10){
//     console.log("amount is small");
// }else{
//     console.log("amount is big");
// }

//Path to the current directory
// console.log(__dirname)
//file Name
// console.log(__filename)
// setInterval(()=>{
// console.log('HI');
// },1000)

//*********************/
 
///NPM 

const _  = require('lodash');

const items  = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items);
console.log(newItems);