var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;


    function increment(){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
        if( currentNumber >= 10) {
            currentNumber--;
        }
       
    }
    
    function decrement(){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        if( currentNumber <= -10) {
            currentNumber++;
        }
        
    }


    function cliq(){
        document.getElementById("conteiner").style.color = "red";
        
    }

    function cliq2(){
        document.getElementById("conteiner").style.color = "green";
    }

    

   


   






