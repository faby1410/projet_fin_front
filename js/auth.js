
function setCookie(name, value, days){
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 *60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires +";path=/";
}

window.onload = adminredirection()

function getCookie(name){
    let cookieArr = document.cookie.split(";")

    for(let i = 0; i < cookieArr.length; i++){
        let cookiePair = cookieArr[i].split("=");

        if(name === cookiePair[0].trim()){
            return decodeURIComponent(cookiePair[1]);
        }
    }

    return null;
}

function adminredirection(){
    const adminCookie = getCookie("admin")
    if (adminCookie) {
        window.location.href = "/admin/acceuil.html"
    }

}

const ConnectAdminForm = document.querySelector("form#admin-auth")
ConnectAdminForm.addEventListener("submit", handleConnectAdminForm)
function handleConnectAdminForm(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const dataObject = Object.fromEntries(data.entries())
    console.log(dataObject)
    const payload = {
        email : dataObject.email_admin,
        password : dataObject.password_admin,
    
}
console.log(payload)
fetch("https://fasti-test-production.up.railway.app/auth/admin", {
    method: "POST",
    body: JSON.stringify(payload),
    headers:{
        "Content-Type": "application/json"
    }
})
.then((res) => res.json())
.then((data) => {
    setCookie("admin", JSON.stringify(data), 2)
    window.location.replace("/admin/acceuil.html")
    // console.log(data)
    // console.log(document.cookie)
})
.catch((error) => alert(error))
}

const ConnectUserForm = document.querySelector("form#user-auth")
ConnectUserForm.addEventListener("submit", handleConnectUserForm)
function handleConnectUserForm(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const dataObject = Object.fromEntries(data.entries())
    console.log(dataObject)
    const payload = {
        email : dataObject.email_admin,
        mdp : dataObject.password_admin,
    
}
console.log(payload)
fetch("http://127.0.0.1:8000/users/users", {
    method: "POST",
    body: JSON.stringify(payload),
    headers:{
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
}



