const rulebox = document.getElementById("ruleBox");
function btnCloseRules(){
    rulebox.style.display="none"
}



let choice;
function selector(draw){


choice = draw;  
if(draw === "scissors"){
    document.getElementById("imageUser").src="/assets/icon-scissors.svg";
}
if(draw === "rock"){
    document.getElementById("imageUser").src="/assets/icon-rock.svg";
}
if(draw === "paper"){
    document.getElementById("imageUser").src="/assets/icon-paper.svg";
}
document.getElementById("resultBox").style.display="flex"
}

// counter arrangment + random number generator//
   

let score = 0;
    let contador = document.getElementById("scoreCounter")
    contador.innerHTML = score   
    
    document.querySelectorAll('.some-class').forEach(item => {
        item.addEventListener('click', event => {
            
            document.getElementById("imagePc").src= ""
            document.getElementById("imagePc").style.width="7.2em"

            document.getElementById("btnTxt").style.visibility = "hidden"
            
            const userImg = document.getElementById("imageUser")
                userImg.style.animation = "none"
            const pcImg = document.getElementById("imagePc")
                pcImg.style.animation = "none"

            let winLosetxt= document.getElementById("winLose")
            winLosetxt.innerHTML=""
            
            /*Timing function start */

            function timeFunction() {
                setTimeout(function(){
                   
                    /*random pc selection */ 
                   
                    let random ;
                    let array = ["/assets/icon-rock.svg","/assets/icon-paper.svg","/assets/icon-scissors.svg"];
                    random = Math.floor((Math.random() * 3));
                    document.getElementById("imagePc").src=array[random];
                    document.getElementById("imagePc").style.width="initial"

                    /* end random pc selection */ 

                    
                   
                   if(random === 0 && choice === "paper"){
                        score+=1 ,contador.innerHTML = score ;
                        winLosetxt.innerHTML="You win"
                        userImg.style.animation = "winnerAnim 1s linear forwards"
                        pcImg.style.animation = "loserAnim 1s linear forwards"

                    }
                    if(random === 0 && choice === "scissors"){
                        score-=1 ,contador.innerHTML = score
                        winLosetxt.innerHTML="You lose" 
                        pcImg.style.animation = "winnerAnim 1s linear forwards"
                        userImg.style.animation = "loserAnim 1s linear forwards"

                    }
                    if(random === 1 && choice === "scissors"){
                        score+=1 ,contador.innerHTML = score;
                        winLosetxt.innerHTML="You win"
                        userImg.style.animation = "winnerAnim 1s linear forwards"
                        pcImg.style.animation = "loserAnim 1s linear forwards"

                    }
                    if(random === 1 && choice === "rock"){
                        score-=1 ,contador.innerHTML = score;
                        winLosetxt.innerHTML="You lose" 
                        pcImg.style.animation = "winnerAnim 1s linear forwards"
                        userImg.style.animation = "loserAnim 1s linear forwards"

                    }
                    if(random === 2 && choice === "paper"){
                        score-=1 ,contador.innerHTML = score;
                        winLosetxt.innerHTML="You lose"
                        pcImg.style.animation = "winnerAnim 1s linear forwards"
                        userImg.style.animation = "loserAnim 1s linear forwards"


                    }
                    if(random === 2 && choice === "rock"){
                        score+=1 ,contador.innerHTML = score;
                        winLosetxt.innerHTML="You win" 
                        userImg.style.animation = "winnerAnim 1s linear forwards"
                        pcImg.style.animation = "loserAnim 1s linear forwards"

                    }
                    
                  
                    if( random === 1 && choice === "paper"||
                        random === 2 && choice ==="scissors" ||
                        random === 0 && choice === "rock"
                    ){
                     winLosetxt.innerHTML="Its a tie"
                     pcImg.style.animation = "winnerAnim 1s linear forwards"
                     userImg.style.animation = "winnerAnim 1s linear forwards"

                    }
                     
                     setTimeout(function textbtn(){
                        document.getElementById("btnTxt").style.visibility = "visible"
                        document.getElementById("resultBox").style.animation = 
                        "resultBoxAnimacion 0.5s linear forwards"

                     },1000)
                    
                     

                }, 1000);
            }
            timeFunction()
                        
            /*Timing function end */

        })
      })
    











/* apparecer y desaparecer despues de elegir */
document.querySelectorAll('.some-class').forEach(item => {
    item.addEventListener('click', event => {
        resultBox.style.visibility="visible"
        document.getElementById("seleccionBox").style.display = "none"
     
    })
  })








/* boton de reinicio */
document.getElementById("rstbtn").addEventListener("click",
function algo(){
    document.getElementById("seleccionBox").style.display = "grid"
 
    document.getElementById("resultBox").style.display="none"

})


// agregar animacion ganador y perdedor

