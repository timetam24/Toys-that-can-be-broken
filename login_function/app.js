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

const submit_btn = document.createElement("input");
submit_btn.setAttribute("type","submit");
submit_btn.setAttribute("value","로그인");
submit_btn.setAttribute("disabled", "");
submit_btn.classList.add("disabled_btn");

id_pd_wrapper.append(id,pd);
form.append(id_pd_wrapper, submit_btn);
form_wrapper.append(form);
header.appendChild(h1);
root.append(header, form_wrapper);

const idAndPdEmptyCheckHandler = () => {
    if(id.value.trim() !== '' && pd.value.trim() !== '' ){
        submit_btn.removeAttribute("disabled");
        submit_btn.className = 'submit_btn';
    }else{
        submit_btn.setAttribute("disabled", "");
        submit_btn.className = 'disabled_btn';
    }
};

const submitBtnHandler = (event) => {
    event.preventDefault()

    const idCheck = /^[a-zA-Z]+[a-zA-Z0-9]{5,19}$/;
    // 영문자로 시작하는 영문자 또는 숫자 6~20자리 아이디 입력
    const pdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    // 영문자+숫자+특수문자 조합으로 8~25자리 비밀번호 입력

if(!idCheck.test(id.value)){
    alert("아이디는 영문자로 시작해야 하며 영문자, 숫자 조합으로 6~20자리 이내여야 합니다.");
    id.focus();
    return false;
}

if(!pdCheck.test(pd.value)){
    alert("비밀번호는 영문자, 숫자, 특수문자 조합으로 8~25자리 이내여야 합니다.");
    pd.focus();
    return false;
}

// form.submit();
};

id.addEventListener("input", idAndPdEmptyCheckHandler);
pd.addEventListener("input", idAndPdEmptyCheckHandler);

submit_btn.addEventListener("click", submitBtnHandler);