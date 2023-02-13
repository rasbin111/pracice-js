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

// createPosts({title: "post three", body: "About post three"})
//     .then(getPosts)
//     .catch((error)=>{console.log(error)})

// async await
// async function init(){
//    await createPosts({title: "post three", body: "About post three"});

//    getPosts();

// }

// init();

// async await with fetch()
async function init(){
    // const response = await fetch("https://jsonplaceholder.typicode.com/users")
    //                     .then(reponse=>reponse.json());

            // OR

    const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await reponse.json();
    console.log(data);
}

init();