let increase=document.querySelector(".increase");
let reset=document.querySelector(".reset");
let decrease=document.querySelector(".decrease");
let counter=document.querySelector("span");
let string=0;

increase.addEventListener("click",()=>{
    string+=1;
    counter.innerText=string;
    setColor();
})
decrease.addEventListener("click",()=>{
    string-=1;
    counter.innerText=string;
    setColor();
})
reset.addEventListener("click",()=>{
    string=0;
    counter.innerText=string;
    setColor();
})

function setColor(){
    if(string>0){
        counter.style.color="green";
    }
    else if(string<0){
        counter.style.color="red";
    }
    else{
        counter.style.color="black";
    }
}