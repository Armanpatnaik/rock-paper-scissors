const game = ()=>{
    let pscore = 0;
    let cscore = 0;
    const startGame = ()=>{
        let playbtn = document.querySelector(".intro button");
        let introScreen = document.querySelector(".intro");
        let match = document.querySelector(".match");
        playbtn.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        })
    };
    startGame();
    const playMatch = ()=>{
        let options = document.querySelectorAll(".option button");/*very imp line*/
        let playerHand = document.querySelector(".player_hand");
        let computerHand = document.querySelector(".computer_hand");
        const hands = document.querySelectorAll(".hands img");
        hands.forEach(hand=>{
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
                setTimeout(()=>{
                    playerHand.src = `rock.png`;
                computerHand.src = `rock.png`;
                }, 1000);
            });
        });
        const computerOptions = ["rock", "paper", "scissors"];
        options.forEach(option =>{
            option.addEventListener("click",function(){
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                setTimeout(()=>{
                    compareHands(this.textContent,computerChoice);
                    playerHand.src = `${this.textContent}.png`;
                    computerHand.src = `${computerChoice}.png`;}, 2000);
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });  
    };
    const updateScore = ()=>{
        const playerScore = document.querySelector(".person_score p");
        const computerScore  = document.querySelector(".computer_score p");
        playerScore.textContent = pscore;
        computerScore.textContent = cscore;
    }
    const  compareHands =  (playerHand, computerHand)=>{
        const winner = document.querySelector(".winner");
        if(playerHand === computerHand){
            winner.textContent = "it's a tie";
            return;
        }
        if(playerHand === 'scissors'){
            if(computerHand === 'paper'){
                winner.textContent = "player wins";
                pscore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "computer wins";
                cscore++;
                updateScore();
                return;
            }
        }
        if(playerHand === 'paper'){
            if(computerHand === 'rock'){
                winner.textContent = "player wins";
                pscore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "computer wins";
                cscore++;
                updateScore();

                return;
            }
        }
        if(playerHand === 'rock'){
            if(computerHand === 'scissors'){
                winner.textContent = "player wins";
                pscore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "computer wins";
                cscore++;
                updateScore();
                return;
            }
        }
    }
    playMatch();
};
game();
