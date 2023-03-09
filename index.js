
// let myArray =  [ 1,2,3,4,5,6,7,8,9]

// myArray[myArray.length -1]

// myArray[2] = 'fish'
// myArray[3] = 'are'
// myArray[4] = 'friends'

// console.log(myArray)

// myArray.push('I love fish')

// vars 

// noun
let nounArray = ['computer', 'flower', 'puppy', 'cruise ship', 'gundam', 'dounut', ' horse stable']
let nounCounter = 0
let nounSpan = document.getElementById ('nounSpan')
// noun

// // noun 2
// let nounArray2 = ['rock', 'horse', 'brick', 'anchor', 'stone', 'pizza', 'english man']
// let nounCounter2 = 0
// let nounSpan2 = document.getElementById ('nounSpan')
// // noun 2


let adjectiveArray = ['fucked', 'sad', 'slippery', 'cold', 'brutal', 'vivacious', 'melted']
let adjectiveCounter = 0
let adjectiveSpan = document.getElementById ('adjectiveSpan')

let eventArray = ['A rabid silk farmer broke into the bank.', 'Five massive volcanos errupted in Paris.', 'A senator was shot.', 'A smallpox outbreak was traced back to the first holy communion of the son of a recently deceased guyanese emmersary.','A moshpit tookover the Upper West Side.', 'GG Allin was found alive in Detriot.']
let eventCounter = 0
let eventSpan = document.getElementById ('eventSpan')


// vars

// nounSpan2.addEventListener ('click', ()=>{

//     nounSpan2.innerHTML = nounArray2[nounCounter2]
//     nounCounter2++

//     if(nounCounter2 > nounArray2.length -1){
//         nounCounter2 = 0
//     }
// })
nounSpan.addEventListener ('click', ()=>{

    nounSpan.innerHTML = nounArray[nounCounter]
    nounCounter++

    if(nounCounter > nounArray.length -1){
        nounCounter = 0
    }
})



adjectiveSpan.addEventListener ('click', ()=>{

    adjectiveSpan.innerHTML = adjectiveArray[adjectiveCounter]
    adjectiveCounter++

    if(adjectiveCounter > adjectiveArray.length -1){
        adjectiveCounter = 0
    }
})

eventSpan.addEventListener ('click', ()=>{

    eventSpan.innerHTML = eventArray[eventCounter]
    eventCounter++

    if(eventCounter > eventArray.length -1){
        eventCounter = 0
    }
})