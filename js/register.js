let firstname=document.querySelector("#firstname")
let lastname=document.querySelector("#lastname")
let email=document.querySelector("#email")
let pwd=document.querySelector("#pwd")
let btnrgst=document.querySelector("#btnrgst")
let btn1log=document.getElementById("btn1log")
let btn2rg=document.getElementById("btn2rg")
btn1log.remove()
btn2rg.remove()
btnrgst.addEventListener("click",(e)=>{
    e.preventDefault()
    if(firstname.value==="" || lastname.value==="" || email.value==="" || pwd.value===""){
        alert("Please fill in all your data")
    }
    else{
        localStorage.setItem("firstname", firstname.value)
        localStorage.setItem("lastname", lastname.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",pwd.value)
        alert("Congratulations! Your registration is complete.")
        setTimeout(()=>{
            window.location="login.html"
        },1500)

    }
}

)