let email=document.getElementById("email")
let password=document.getElementById("pwd")
let logbtn=document.getElementById("loginbtn")
let btn1log=document.getElementById("btn1log")
let btn2rg=document.getElementById("btn2rg")

btn1log.remove()
btn2rg.remove()
function check(e){
    e.preventDefault()
    if(email.value.trim()!=localStorage.getItem("email") || password.value.trim()!=localStorage.getItem("password")){
        alert("email or password is incorrect")
    }
    else{
        setTimeout(
            ()=>{
                window.location="index.html"
            },1500)
    }
    
}
logbtn.addEventListener("click",check)

