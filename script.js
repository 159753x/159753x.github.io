async function list_directory(user, repo, directory) {
    const url = `https://api.github.com/repos/159753x/159753x.github.io/git/trees/d6ffa53679c8a1668bd249b8282e0357b5a1a1ea`;
    // `https://api.github.com/repos/159753x/159753x.github.io/git/trees/d6ffa53679c8a1668bd249b8282e0357b5a1a1ea/master`
    // `https://api.github.com/repos/${user}/${repo}/git/trees/master`
    const list = await fetch(url).then(res => res.json());
    return list.tree.map(element => element.path)
    
}

list_directory().then(res => {
    // console.log(res)

    const div = document.getElementById("lista-foldera");
    console.log(res);
    res.forEach(element => {
        
        if(!element.includes('.')){
            div.innerHTML += `<p><a href="${element}">${element}</a></p>\n` ;
        }
    });
    
});
