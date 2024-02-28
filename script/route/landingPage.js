// 버튼 경로
const loginPage = document.querySelector("#loginPage");
const signUpPage = document.querySelector("#signUpPage");


loginPage.addEventListener("click", function(){
    window.location.href = '/login.html';
})

signUpPage.addEventListener("click", function(){
    window.location.href = '/signUp.html';
})