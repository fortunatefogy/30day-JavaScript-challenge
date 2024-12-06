document.addEventListener("DOMContentLoaded",()=>{
    const days=[
        {name:"Sunday",quote:"Time to chillax"},
        {name:"Monday",quote:"Monday morning blues"},
        {name:"Tuesday",quote:"Taco time!"},
        {name:"Wednesday",quote:"Two more days to week end."},
        {name:"Thursday",quote:"The weekend is almost here!"},
        {name:"Friday",quote:"Weekend is here!"},
        {name:"Saturday",quote:"Its party time"}
    ];
    const today = days[new Date().getDay()];
    console.log(today);

    document.getElementById("weekday").textContent = today.name;
    document.getElementById("phrase").textContent = today.quote;
});