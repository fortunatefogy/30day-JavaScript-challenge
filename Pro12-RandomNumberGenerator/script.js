const generateBtn= document.getElementById("generate-btn");
const numberElement= document.getElementById("random-number");

generateBtn.addEventListener("click",()=>{
    const randomNum = Math.floor(Math.random()*1000)+1;
    numberElement.textContent=randomNum
})