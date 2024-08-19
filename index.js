let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-game");
let newGameBtn=document.querySelector("#new-Btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turnO=true; 

const winPattern=[
    [0,1,2],
    [3,4,5],
    [2,5,8],
    [0,3,6],
    [1,4,7],
    [6,7,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("got clicked!");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos1Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const showWinner=((winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
});
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const reset=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
newGameBtn.addEventListener("click",reset);
resetBtn.addEventListener("click",reset);