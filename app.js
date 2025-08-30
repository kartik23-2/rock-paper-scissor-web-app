let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencompchoice = () => {
    const compchoices = ["rock", "paper", "scissor"];
    const randomnum = Math.floor(Math.random() * 3);
    return compchoices[randomnum];
};
const playgame = (userChoise) => {
    console.log("user choiice =", userChoise);
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);


    if (userChoise === compchoice) {
        console.log("draw");
        msg.innerHTML = "it's a draw";
        msg.style.color = "gray";
    }
    else if (
        (userChoise === "rock" && compchoice === "scissor") ||
        (userChoise === "paper" && compchoice === "rock") ||
        (userChoise === "scissor" && compchoice === "paper")
    ) {
        console.log("you win!");
        userscore++;
        document.getElementById("user-score").innerText = `User: ${userscore}`; 
        msg.innerHTML = "you win!";
        msg.style.color = "green";
    } else {
        console.log("you lose...");
        compscore++;
        document.getElementById("computer-score").innerText = `Comp: ${compscore}`; 
        msg.innerHTML = "you lose...";
        msg.style.color = "red";
    }
};

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); 
        playgame(userChoice);
    });
});