const posts = [
    {title: "post one", body: "About post one"},
    {title: "post two", body: "About post two"},
]

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}


function createPosts(post){

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if (!error){
                resolve();
            }
            else{
                reject("Error: something went wrong");
            }
        }, 2000);

    });
 
}

createPosts({title: "post three", body: "About post three"})
    .then(getPosts)
    .catch((error)=>{console.log(error)})


// promise.all - Run multiple promises at once
// const p1 = Promise.resolve("Hello");
// const p2 = 10;
// const p3 = new Promise((resolve, reject)=> setTimeout (resolve, 2000, "Good bye"));

// Promise.all([p1, p2, p3]).then(value=>console.log(value));

