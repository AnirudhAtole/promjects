let posts = [{title:'post one'}];
const user = [{name : 'anirudh' , lastuseractivity: 'feb 16 2023'}]


function createPost(post){
    async()=>{
        new Promise((resolve,reject) =>{
            posts.push(post);
            resolve();
        })
    }
}

function deletePost(){
    async() => {
        new Promise((resolve , reject) => {
            if(posts.length > 0){
                const popped = posts.pop()
                resolve(popped);
            }
            else{
                reject(()=>"ERROR")
            }
        })
    }
}
