require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const github_data={
    
        "login": "Raiujjwal2003",
        "id": 96259534,
        "node_id": "U_kgDOBbzNzg",
        "avatar_url": "https://avatars.githubusercontent.com/u/96259534?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Raiujjwal2003",
        "html_url": "https://github.com/Raiujjwal2003",
        "followers_url": "https://api.github.com/users/Raiujjwal2003/followers",
        "following_url": "https://api.github.com/users/Raiujjwal2003/following{/other_user}",
        "gists_url": "https://api.github.com/users/Raiujjwal2003/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Raiujjwal2003/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Raiujjwal2003/subscriptions",
        "organizations_url": "https://api.github.com/users/Raiujjwal2003/orgs",
        "repos_url": "https://api.github.com/users/Raiujjwal2003/repos",
        "events_url": "https://api.github.com/users/Raiujjwal2003/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Raiujjwal2003/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Ujjwal rai",
        "company": null,
        "blog": "https://www.linkedin.com/in/ujjwal-rai-95a7a8208/",
        "location": "bhopal",
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 19,
        "public_gists": 0,
        "followers": 5,
        "following": 6,
        "created_at": "2021-12-16T18:17:57Z",
        "updated_at": "2024-01-02T06:51:06Z"
      
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/twitter', (req, res)=>{
    res.send('ujjwalcom');
})

app.get('/github',(req, res)=> {
    res.json(github_data) ;
})
app.get('/login',(req, res)=>{
    res.send('<h1> Please login at that route </h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})