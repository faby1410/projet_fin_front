const ConnectAdminForm = document.querySelector("form#admin-auth")
ConnectAdminForm.addEventListener("submit", handleConnectAdminForm)
function handleConnectAdminForm(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const dataObject = Object.fromEntries(data.entries())
    console.log(dataObject)
    const payload = {
        username : dataObject.email_admin,
        password : dataObject.password_admin,
    
}
console.log(payload)
fetch("http://127.0.0.1:8000/auth/token", {
    method: "POST",
    body: JSON.stringify(payload),
    headers:{
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
}

const ConnectUserForm = document.querySelector("form#admin-auth")
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



