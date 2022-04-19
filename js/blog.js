fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0,5)
        const singlePost = postsArr.map(item => {
                return `<h2>${item.title}</h2>
                <p>${item.body}</p>
                <hr />
                `
        }).join(``);
        document.getElementById("postContainer").innerHTML= singlePost
    })

    document.getElementById("blogInput").addEventListener("submit", function(event){
        event.preventDefault()
        const title = document.getElementById("blogTitleInput")
        const body = document.getElementById("blogBodyInput")
        let post = {
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
                document.getElementById("postContainer").innerHTML += `<h2>${data.title}</h2>
                <p>${data.body}</p>
                <hr />
                `
            })
    })