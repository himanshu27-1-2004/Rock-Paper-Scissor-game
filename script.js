let userscore = 0;
let compscore = 0;

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

 const gencomputerchoice = () => {
    // rock,paper,scissor
    const options = [ "rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

 }
 
 const drawgame = () => {
    msg.innerText = "Game was draw : try again!";
    msg.style.backgroundColor = "grey";
 }

 const showWinner = (userwin, userchoice, compchoice) => {
if(userwin){
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
}
else{
    compscore++;
    compscorepara.innerText =compscore;
    msg.innerText = `You lost! ${compchoice} beats  Your ${userchoice}`;
    msg.style.backgroundColor = "red";
}
 }

 const playgame = (userchoice) => {
    //generate computer choice
    const compchoice = gencomputerchoice();
    

    if (userchoice === compchoice) {
        //draw game
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            // scissors, paper
            userwin = compchoice === "paper" ? false : true;
        }
        if(userchoice === "paper"){
            // rock, scissors
            userwin = compchoice === "scissors" ? false : true;
        }
        if(userchoice === "scissors"){
            // rock, paper
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compchoice);
    }
 }

 
choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);

    })
})