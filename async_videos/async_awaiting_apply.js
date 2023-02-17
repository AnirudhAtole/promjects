console.log('person1: show ticket');
console.log('person2: show ticket');

const preMovie = async() => {

const PromiseWifeBringingTicks = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve('ticket')
    }, 3000);
});
const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`));
const getButter =  new Promise((resolve,reject) => resolve(`butter`));
const getColdrink = new Promise((resolve,reject)=> resolve(`colddrink`));


let ticket = await PromiseWifeBringingTicks;

console.log(`wife: I have the ${ticket}`);
console.log('Husband: we should go in');
console.log('wife: no i am hungry');

let popcorn = await getPopcorn;

console.log(`I have the ${popcorn}`);
console.log('husband: we should go in');
console.log('wife: I need butter on my popcorn');

let butter = await getButter;

console.log(`I have the ${butter}`);
console.log('Husband: we should go in');
console.log('wife: thoda colddrink hojata toh...');

let colddrink = await getColdrink;

console.log(`I got the ${colddrink}`);
console.log('Husband: anything else?');
console.log('naah we done');

return ticket;
}

preMovie().then((m) => console.log(m));



console.log('person4: show ticket');
console.log('person5: show ticket');

