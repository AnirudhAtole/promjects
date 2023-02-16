console.log('person1: show ticket');
console.log('person2: show ticket');


const PromiseWifeBringingTicks = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve('ticket')
    }, 3000);
});

const getPopcorn = PromiseWifeBringingTicks.then((t)=>{
    console.log('wife: I have the tickets');
    console.log('Husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve,reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t)=>{
    console.log('I have the popcorns');
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');
    return new Promise((resolve,reject) => resolve(`${t} butter`));
})

const getColdrink = getButter.then((t)=> {
    console.log('I got butter ');
    console.log('Husband: we should go in');
    console.log('wife: thoda colddrink hojata toh...')
    return new Promise((resolve,reject)=>{
        resolve(`${t} colddrink`);
    })
})

getColdrink.then((t) => console.log(t));

console.log('person4: show ticket');
console.log('person5: show ticket');

