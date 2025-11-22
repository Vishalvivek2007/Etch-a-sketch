let num =16;

let box =document.querySelector(".box");
let container = document.querySelector(".container");
let isdrawing=false;
container.addEventListener("mousedown", (e)=>{
    e.preventDefault();
    isdrawing=true;
});

box.addEventListener("mouseup",()=>{
    isdrawing=false;
} );

box.addEventListener("mouseleave", ()=>{
    isdrawing=false;
})

for(let i=0;i<num*num;i++){
    let box = document.createElement("div");
    box.style.border="solid black 1px";
    box.style.height=600/num +'px';
    box.style.width=600/num +'px';
    box.style.draggable="false";    
    box.addEventListener("mousedown",(event)=>{
        event.target.style.backgroundColor="Yellow";
    })
    box.addEventListener("mouseover",(event)=>{
        if(isdrawing){
            box.style.backgroundColor="yellow";
        }
    })

    container.appendChild(box);
}