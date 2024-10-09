// Marco! Polo!
let checkNum 

for (let i= 0; i < 100; i++) {
    checkNum = i 
    if (checkNum%3===0 && checkNum%5===0){
        console.log('Marco' + ' Polo! ') 
    }
    else if (checkNum % 5 === 0) {
        console.log(' Polo! ')    
    } 
    else if (checkNum % 3 === 0) {
        console.log(' Marco! ')
    }
}
