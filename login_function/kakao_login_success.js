const urlQueryString = window.location.search;
const urlParams = new URLSearchParams(urlQueryString);

const bodyKakaoPage = document.querySelector('body');
const wrapperKakaoPage = document.createElement('div');

const imgKakaoPage = document.createElement("img");
imgKakaoPage.setAttribute("src", urlParams.get('profileImgUrl'));
imgKakaoPage.setAttribute("alt", "프로필 이미지");

const h1KakaoPage = document.createElement("h1");
h1KakaoPage.innerText = `${urlParams.get('name')}님, 반갑습니다!`;

const linkLogoutKakaoPage = document.createElement("a");
linkLogoutKakaoPage.setAttribute("href","javascript:kakaoLogout()");
linkLogoutKakaoPage.innerText="카카오 로그아웃";

wrapperKakaoPage.append(imgKakaoPage, h1KakaoPage);
bodyKakaoPage.append(wrapperKakaoPage, linkLogoutKakaoPage);

window.Kakao.init('59e902e484ff6382c41c041026e55a9d');
function kakaoLogout() {
    if (!Kakao.Auth.getAccessToken()) {
        alret('Not logged in.');
        return;
    }
    Kakao.Auth.logout(function (response) {
        if(response){
            alert("카카오톡 로그아웃 처리되었습니다.");
            window.location.href = 'http://127.0.0.1:5500/login_function/index.html'
        }
    });
}