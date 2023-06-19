const clientId = config.githubClientID;
const clientSecret = config.githubClientSecret;
const redirectUri = 'http://localhost:5500/login_function/github_login_success.html';

const urlParams = new URLSearchParams(window.location.search);
let userAccessToken = null;

const bodyGithubPage = document.querySelector('body');
const wrapperGithubPage = document.createElement('div');
const imgGithubPage = document.createElement("img");
const h1GithubPage = document.createElement("h1");

var req = new XMLHttpRequest();
req.open('POST',
  'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
  true);
req.setRequestHeader('Accept', 'application/json');
req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
req.send('code=' + urlParams.get('code') +
    '&client_id=' + clientId +
    '&client_secret=' + clientSecret);

req.onload = async () => {
    if(req.status === 200){
        userAccessToken = JSON.parse(req.response).access_token;
        await fetch('https://api.github.com/user', {
    headers: {Accept: "application/json" ,'Authorization': `Bearer `+userAccessToken}
}).then(reponse => reponse.json().then(data => {imgGithubPage.setAttribute("src", data.avatar_url)
h1GithubPage.innerText = `${data.login}님, 반갑습니다!`;
imgGithubPage.setAttribute("alt", "프로필 이미지");
wrapperGithubPage.append(imgGithubPage, h1GithubPage);
bodyGithubPage.append(wrapperGithubPage);
})
).catch(err => console.error(err))
    }else{
        console.log(error);
    }
};






