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
submit_btn.classList.add("submit_btn");

id_pd_wrapper.append(id,pd);
form.append(id_pd_wrapper, submit_btn);
form_wrapper.append(form);
header.appendChild(h1);
root.append(header, form_wrapper);