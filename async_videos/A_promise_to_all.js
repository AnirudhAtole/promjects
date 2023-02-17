let posts = [{title:'post one'}];
const user = [{name : 'anirudh' , lastuseractivity: 'feb 16 2023'}]


function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    })
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            user.lastuseractivity =  new Date();
            resolve(user.lastuseractivity);
        }, 1000);
    })
}

function getPost(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            posts.forEach((post)=>{
                console.log(post.title);
                console.log(user.lastuseractivity)
            })
            resolve();
        },1000)
    })
}

function deletePost(){
    return new Promise((resolve,reject) =>{
        if(posts.length >= 1){
            const popped = posts.pop();
            resolve();
        }
        else{
            reject("Error");
        }

    })
}

Promise.all([createPost({title:'post two'}),updateLastUserActivityTime()]).then(getPost().then(()=>deletePost().then(()=>getPost())))