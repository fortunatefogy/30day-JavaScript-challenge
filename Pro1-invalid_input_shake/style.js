function validate() {
    let inputname = document.getElementById("inputname");
    let inputvalue = inputname.value.trim();
    const errormessage = document.getElementById("error-message");

    if (inputvalue === "") {
        inputname.classList.add("shake");
        errormessage.style.visibility = "visible";

        setTimeout(function () {
            inputname.classList.remove("shake");
            errormessage.style.visibility = "hidden";
        }, 500); // Match the duration of the animation (500ms)
    }
    else{
        alert("form submitted");
    }
}
