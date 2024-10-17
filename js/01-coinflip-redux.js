// The “Coin Flip” Game Redux
let iterNum = parseInt(prompt("How many times flip coin? (Enter number) "))
let coinFlip 

//for loop 
for (let i = 1; i<= iterNum; i++){
    randomNum = Math.floor(Math.random()*2)
    if (randomNum > 0) {
        coinFlip = 'Tails'
    }else  {  
        coinFlip ='Heads'
    }
    console.log(coinFlip + ' ')
    //console.log(randomNum) checking random number 
}

