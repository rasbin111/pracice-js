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


function createPosts(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}


createPosts({title: "post three", body: "About post three"}, getPosts);