 const inputTextArea=document.getElementById("input-textarea");
 const characCount=document.getElementById("charac-count");
 const wordCount=document.getElementById("word-count");

 inputTextArea.addEventListener("input",()=>{
    characCount.textContent=inputTextArea.value.length;
    const txt=inputTextArea.value.trim();
    const wordArray=txt.split(/\s+/);
    let wordCountValue=0;
    for(let i=0;i<wordArray.length;i++){
        if(wordArray[i]!==""){
            wordCountValue++;
        }
    }
    wordCount.textContent=wordCountValue;

 });
