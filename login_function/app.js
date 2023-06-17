const root = document.getElementById("root");

const header = document.createElement("header");
const h1 = document.createElement("h1");
h1.innerText="TimeTam";

const form_wrapper = document.createElement("div");
form_wrapper.classList.add("form_wrapper");
const form = document.createElement("form");

const id_pd_wrapper = document.createElement("div");
id_pd_wrapper.classList.add("id_pd_wrapper");

const id = document.createElement("input");
id.setAttribute("type","text");
id.setAttribute("placeholder","아이디");
id.classList.add("id");

const pd = document.createElement("input");
pd.setAttribute("type","password");
pd.setAttribute("placeholder","비밀번호");
pd.classList.add("pd");

const error_message = document.createElement("p");
error_message.classList.add("error_message");

const app_login_btn = document.createElement("input");
app_login_btn.setAttribute("type","button");
app_login_btn.setAttribute("value","로그인");
app_login_btn.setAttribute("disabled", "");
app_login_btn.classList.add("disabled_btn");

const login_btn_wrapper = document.getElementById("login_btn_wrapper");

id_pd_wrapper.append(id,pd);
form.append(id_pd_wrapper, error_message, app_login_btn, login_btn_wrapper);
form_wrapper.append(form);
header.appendChild(h1);
root.append(header, form_wrapper);

const idAndPdEmptyCheckHandler = () => {
    if(id.value.trim() !== '' && pd.value.trim() !== '' ){
        app_login_btn.removeAttribute("disabled");
        app_login_btn.className = 'app_login_btn';
    }else{
        app_login_btn.setAttribute("disabled", "");
        app_login_btn.className = 'disabled_btn';
    }
};

const loginBtnHandler = () => {
    const idCheck = /^[a-zA-Z]+(?=.*[a-zA-Z])(?=.*[0-9]).{5,19}$/;
    // 영문자로 시작하는 영문자 또는 숫자 6~20자리 아이디 입력
    const pdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    // 영문자+숫자+특수문자 조합으로 8~25자리 비밀번호 입력

if(!idCheck.test(id.value)){
    error_message.innerText = "아이디는 영문자로 시작해야 하며 영문자, 숫자 조합으로 6~20자리 이내여야 합니다.";
    id.focus();
    return false;
}

if(!pdCheck.test(pd.value)){
    error_message.innerText = "비밀번호는 영문자, 숫자, 특수문자 조합으로 8~25자리 이내여야 합니다.";
    pd.focus();
    return false;
}

if(id.value !== "imuser1" || pd.value !== "frontend1@"){
    error_message.innerText = "아이디 또는 비밀번호가 일치하지 않습니다.";
    pd.focus();
    return false;
}

if(id.value === "imuser1" && pd.value === "frontend1@"){
    error_message.innerText = "";
    window.location.href = "http://127.0.0.1:5500/login_function/app_login_success.html";
}
};

id.addEventListener("input", idAndPdEmptyCheckHandler);
pd.addEventListener("input", idAndPdEmptyCheckHandler);

app_login_btn.addEventListener("click", loginBtnHandler);