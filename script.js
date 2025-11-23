let slider= document.querySelector("#slider");
let num =16;


slider.addEventListener("input", (event)=>{
    num = Math.sqrt(event.target.value);
    num=Math.round(num);
    newgrid();
});

function togglemode(){
 if(randomcolours==false){
    randomcolours=true;
 }  
 else{
    randomcolours=false;
 }
}


let box =document.querySelector(".box");
let container = document.querySelector(".container");
let isdrawing=false;
let randomcolours = false;

container.addEventListener("mousedown", (e)=>{
    e.preventDefault();
    isdrawing=true;
});

box.addEventListener("mouseup",()=>{
    isdrawing=false;
} );

box.addEventListener("mouseleave", ()=>{
    isdrawing=false;
});

function getrandom(){
    let temp = Math.random();
    temp=Math.round(temp*255);
    return temp;
}



function creategrid(){
    for(let i=0;i<num*num;i++){
        let box = document.createElement("div");
        box.style.border="solid black 1px";
        box.style.height=600/num +'px';
        box.style.width=600/num +'px';
        box.style.draggable="false";    
        box.dataset.opacity=0;
        box.addEventListener("mousedown",(event)=>{
            event.target.dataset.opacity=Math.min(parseFloat(event.target.dataset.opacity)+0.1,1);
            if(randomcolours){
                let temp1 =getrandom();
                let temp2=getrandom();
                let temp3=getrandom();
                event.target.style.backgroundColor=`rgba(${temp1}, ${temp2}, ${temp3},${event.target.dataset.opacity} )`;
            }
            else{
                event.target.style.backgroundColor=`rgba(0, 0, 0,${event.target.dataset.opacity} )`;
            }
        })
        box.addEventListener("mouseover",(event)=>{
            if(isdrawing){
                event.target.dataset.opacity=Math.min(parseFloat(event.target.dataset.opacity)+0.1,1);
                if(randomcolours){
                    let temp1 =getrandom();
                    let temp2=getrandom();
                    let temp3=getrandom();
                    event.target.style.backgroundColor=`rgba(${temp1}, ${temp2}, ${temp3},${event.target.dataset.opacity} )`;
                }
                else{
                    event.target.style.backgroundColor=`rgba(0, 0, 0,${event.target.dataset.opacity} )`;
                }
                
            }
        })
        container.appendChild(box);
    }
}

creategrid();


function newgrid(){
    container.innerHTML="";
    creategrid();
}

