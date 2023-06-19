const kakao_id_login = document.getElementById("kakao_id_login");
kakao_id_login.setAttribute("href","javascript:kakaoLogin()");

window.Kakao.init(config.kakakoAppJavaScriptKey);
        function kakaoLogin() {
            window.Kakao.Auth.login({
                scope: 'profile_nickname, profile_image', //동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣습니다.
                success: function (response) {
                    console.log(response) // 로그인 성공하면 받아오는 데이터
                    window.Kakao.API.request({ // 사용자 정보 가져오기 
                        url: '/v2/user/me',
                        success: (res) => {
                            const kakao_account = res.kakao_account;
                            console.log(kakao_account)
                    window.location.href = 'http://localhost:5500/login_function/kakao_login_success.html?name='+ kakao_account.profile.nickname + '&profileImgUrl=' + kakao_account.profile.profile_image_url;
                        }
                    });
                },
                fail: function (error) {
                    console.log(error);
                }
            });
        }