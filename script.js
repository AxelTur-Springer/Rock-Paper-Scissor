const rulebox = document.getElementById("ruleBox");
function btnCloseRules(){
    rulebox.style.display="none"
}
rulebox.style.display="none"


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
                  
                    /* end random pc selection */ 

                    
                   
                   if(random === 0 && choice === "paper"){
                        score+=1 ,contador.innerHTML = score ;
                        winLosetxt.innerHTML="You win"
                    }
                    if(random === 2 && choice === "paper"){
                        score-=1 ,contador.innerHTML = score;
                        winLosetxt.innerHTML="You lose"

                    }
                    if(random === 0 && choice === "scissors"){
                        score-=1 ,contador.innerHTML = score
                        winLosetxt.innerHTML="You lose" 
                    }
                    if(random === 1 && choice === "scissors"){
                        score+=1 ,contador.innerHTML = score;
                        winLosetxt.innerHTML="You win"  
                    }
                    if(random === 1 && choice === "rock"){
                        score-=1 ,contador.innerHTML = score;
                        winLosetxt.innerHTML="You lose" 
                    }
                    if(random === 2 && choice === "rock"){
                        score+=1 ,contador.innerHTML = score;
                        winLosetxt.innerHTML="You win"  
                    }
                   // else if(){
                     //   winLosetxt.innerHTML="Its a tie"}

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

