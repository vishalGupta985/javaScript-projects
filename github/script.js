const APIURL = "https://api.github.com/users/";
const main = document.getElementById('main');
const form = document.getElementById('form');
const searchBox = document.getElementById('search');

const getUser = async (userName) =>{
    const response = await fetch(APIURL + userName)
    const data = await response.json()
    console.log(data);
    const card = `
            <div class="card">
            <div>
                <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
            </div>
            <div class="user-info">
                <h2>${data.login}</h2>
                <p>${data.bio}</p>

                <ul class="info">
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repos</strong></li>
                </ul>

                <div id="repos">
                    
                </div>
            </div>
        </div>`
        main.innerHTML = card;
        getRepos(userName)
}

const getRepos = async (userName) =>{
    const response = await fetch(APIURL + userName + "/repos")
    const data = await response.json()
    
    
    data.forEach(
        (item) =>{
            const repos = document.getElementById('repos')
            const elem = document.createElement('a')
            elem.classList.add("repo")
            elem.href = item.html_url
            elem.innerText = item.name
            elem.target = "_blank"
            repos.appendChild(elem)
             
        }
    )
    
    
}

const formSubmit = () =>{
    if(searchBox.value != ""){
        getUser(searchBox.value)
        searchBox.value = ""
    }
    return false;
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    formSubmit();
})

// form.addEventListener('onsubmit', () =>{
//     const searchBox = document.getElementById('search')
//     console.log(search);
//     if(searchBox.value != ""){
//         getUser(searchBox.value)
//     }
//     return false;
//     console.log('hello');
    
// })
// getUser("vishalGupta985")