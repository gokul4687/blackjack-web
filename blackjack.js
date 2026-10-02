
let cards=[]
let sum=0
let hasblackjack=false
let isAlive=false
let message=''
console.log(cards)

let messageEl=document.getElementById("message-el")
// let sumEl=document.getElementById("sum-el")
//or

let sumEl=document.querySelector("#sum-el") 
// it is  more dynamic here it we can give the class ,id, tag  its more like we apply style in the css style


let cardsEl=document.getElementById('cards-el')
console.log(cardsEl)
let player={
    uname:'goku',
    chips:123
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.uname+" :$ "+player.chips


function getrandomcard(){
    let random=Math.floor(Math.random()*13)+1

    if (random===1)
    {
         console.log(random)

        return 11
    }
    else if (random>10){
        console.log(random)
        return 10
    }
    else{
        console.log(random)
        return random
    }



}



function startgame(){
    isAlive=true
    let firstcard=getrandomcard()
    let sceondcard=getrandomcard()
    cards=[firstcard,sceondcard]

    sum=firstcard+sceondcard

    rendergame()
}

function rendergame(){

    cardsEl.textContent="Cards: " 
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i] +" "
    }
    sumEl.textContent= 'sum: ' +sum
    
    if (sum<= 20){
    message='do you want new card'

} else if(sum===21){
    message='you got blackjacl'
    hasblackjack=true

}else {
   message='your out'
    isAlive=false
}

 messageEl.textContent=message
}

function card(){
    let newccard=getrandomcard()
    cards.push(newccard)
    sum+=newccard
    if(isAlive===true && hasblackjack===false){
    rendergame()
    }
}
