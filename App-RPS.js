let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user_score");
const compscorepara=document.querySelector("#comp_user");


const gencompchoices=()=>{
    const options=["rock","paper","scissor"];
    let index=Math.floor(Math.random()*3);
    return options[index];


}
const drawgame=()=>{
    console.log("Game is draw");
    msg.innerText="Game was Draw!";
    msg.style.backgroundColor="yellow";
    
}


const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You win!");
        msg.innerText=`You Win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You Lose!");
        msg.innerText=`You Lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="maroon";
    }
}

const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice=gencompchoices();
    console.log("comp choice=",compchoice);
    if(userchoice===compchoice){
        drawgame();

    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;

        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);

    }
    


    

};
choices.forEach((choice)=>{
    console.log("choice");
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})