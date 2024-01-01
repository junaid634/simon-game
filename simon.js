let gamesq=[];
let usersq =[];
let level = 0;
let started = false;
let box = ["green","red","yellow","blue"];
let h3 = document.querySelector("h3");
document.addEventListener("keypress", function(){
    if(started==false){
    console.log("clicked");
    started = true;
    rand();

   }
});
function flash1(btn){
    btn.classList.add("flash");
    setTimeout(()=> {
    btn.classList.remove("flash");
  }, 100);
}
function flash2(btn){
    btn.classList.add("uflash");
    setTimeout(()=> {
    btn.classList.remove("uflash");
  }, 100);
}
function rand(){
    usersq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let rnum = Math.floor(Math.random()*4);
    let el = document.querySelector(`.${box[rnum]}`);
     flash1(el);  
     gamesq.push(box[rnum]); 
}
function check(indx){
    if(usersq[indx]===gamesq[indx]){
        if(usersq.length==gamesq.length){
            setTimeout(rand,1000);
        }
        console.log("same value");
    } else{
        h3.innerText="game over! press any key to restart";
       let body= document.querySelector("body");
       body.classList.add("black");
       setTimeout(()=> {
       body.classList.remove("black");
     }, 100);
     let h1 = document.querySelector("h1");
     h1.innerText=`Your scores are ${level}`;
      reset();
    }
}
function reset(){
    gamesq=[];
    usersq =[];
    level = 0;
    started = false;
}
function btnprss(){
    let btn = this;
    flash2(btn);
    let user = btn.getAttribute("id");
    usersq.push(user);
    console.log(usersq); 
    check(usersq.length-1);
}
let allbtn = document.querySelectorAll(".box");
for(btns of allbtn){
    btns.addEventListener("click",btnprss);
}
