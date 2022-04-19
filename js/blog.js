
let postsArray = []
const form = document.getElementById("blogInput")

function renderPosts(){
    const singlePost = postsArray.map(item => {
        return `<h2>${item.title}</h2>
        <p>${item.body}</p>
        <hr />
        `
}).join(``);
document.getElementById("postContainer").innerHTML= singlePost
}


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0,5)
        renderPosts()
    })

form.addEventListener("submit", function(event){
    event.preventDefault()
    const body = document.getElementById("blogBodyInput")
    const title = document.getElementById("blogTitleInput")
    if(title.value && body.value){
    const post = {
        title: title.value,
        body: body.value
    }
    const options = {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(data => {
            postsArray.unshift(data)
            renderPosts()
            form.reset()
        })}
})