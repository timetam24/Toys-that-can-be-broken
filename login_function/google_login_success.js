const urlQueryString = window.location.search;
const urlParams = new URLSearchParams(urlQueryString);

const bodyGooglePage = document.querySelector('body');
const wrapperGooglePage = document.createElement('div');

const imgGooglePage = document.createElement("img");
imgGooglePage.setAttribute("src", urlParams.get('profileImgUrl'));
imgGooglePage.setAttribute("alt", "프로필 이미지");

const h1GooglePage = document.createElement("h1");
h1GooglePage.innerText = `${urlParams.get('fullName')}님, 반갑습니다!`;

wrapperGooglePage.append(imgGooglePage, h1GooglePage);
bodyGooglePage.append(wrapperGooglePage);