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
