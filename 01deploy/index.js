const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const port2=5000;

const dataa={
    "login": "Dksng07",
    "id": 98265187,
    "node_id": "U_kgDOBdtoYw",
    "avatar_url": "https://avatars.githubusercontent.com/u/98265187?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Dksng07",
    "html_url": "https://github.com/Dksng07",
    "followers_url": "https://api.github.com/users/Dksng07/followers",
    "following_url": "https://api.github.com/users/Dksng07/following{/other_user}",
    "gists_url": "https://api.github.com/users/Dksng07/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Dksng07/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Dksng07/subscriptions",
    "organizations_url": "https://api.github.com/users/Dksng07/orgs",
    "repos_url": "https://api.github.com/users/Dksng07/repos",
    "events_url": "https://api.github.com/users/Dksng07/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Dksng07/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Dheeraj  Singh",
    "company": null,
    "blog": "",
    "location": "Greater Noida",
    "email": null,
    "hireable": true,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-01-23T12:59:38Z",
    "updated_at": "2023-12-14T13:21:50Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("ashutoshtwitter.com")
})
app.get('/ashu',(req,res)=>{
    res.send("<h1> Ashutsoh</h1>")
})
// app.get('/github',(req,res)=>{
//     res.json(dataa);
// })
app.get('/github', (req, res) => {
    const formattedData = JSON.stringify(dataa, null, 2);
    res.setHeader('Content-Type', 'application/json');
    res.send(formattedData);
  });



app.listen(port2, () => {
  console.log(`Example app listening on port ${port2}`)
}) 