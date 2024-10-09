// The “Coin Flip Streak” Game 
let coinFlip 
let randomNum

//do while loop 
do {
    randomNum = Math.floor(Math.random()*2)
    if (randomNum > 0) {
        coinFlip = 'Tails'
    }else  {  
        coinFlip ='Heads'
    }
    console.log(coinFlip + ' ')
    //console.log(randomNum)     checking random number 
} while (coinFlip != 'Tails');
