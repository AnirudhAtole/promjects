console.log('person1: show ticket');
console.log('person2: show ticket');

const preMovie = async() => {

const PromiseWifeBringingTicks = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve('ticket')
    }, 3000);
});
const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`));
const getCandy =  new Promise((resolve,reject) => resolve(`candy`));
const getCoke =  new Promise((resolve,reject) => resolve(`coke`));
let ticket;
try{
     ticket = await PromiseWifeBringingTicks;
}catch(e){
    ticket = 'sad face';
}


let  [popcorn , candy , coke ] = await Promise.all([getPopcorn , getCandy , getCoke]);
console.log(`${popcorn} ${candy} ${coke}`);
}