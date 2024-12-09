const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const copyButton = document.getElementById("copy");

const generatePassword=()=>{
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = " ";
    const lenthofPassword = 12;
    for(let i=0;i<lenthofPassword;i++){
        password += chars.charAt(Math.floor(Math.random()*chars.length));

    }
    passwordBox.value = password;
}

button.addEventListener("click",generatePassword);

copyButton.addEventListener("click",()=>{
    const passwordCopy = passwordBox.value.trim();
    if(!passwordCopy){
        alert("no password to copy.generate password first");
        return;
    }
    navigator.clipboard.writeText(passwordCopy)
        .then(()=>{
            alert("password copied to clipboard");
        });

});