


function tapCode(code) {
    
let polybiusSquare = [
    ["a","b","c/k","d","e"],
    ["f","g","h","i","j"],
    ["l","m","n","o","p"],
    ["q","r","s","t","u"],
    ["v","w","x","y","z"]]



    if (code.includes(".")) {
        
    


let number = 0
let previosBrake = false
let parsedArray = []
    for (let i = 0; i < code.length; i++) {

        if (number > 5 || (code[i] === " "  && previosBrake === true)){
            console.log(`possible fault at position ${i}`)
        }
        
        if (code[i] === "."){
            number++
            previosBrake = false
        }

        if (code[i] === " " || i > code.length - 2){
            parsedArray = [...parsedArray, number - 1]
            number = 0 
            previosBrake = true
        }
    }
    


    let finsihedString = ""
    for (let i = 0; i < parsedArray.length/2; i++) {
        
        if (!(parsedArray[i * 2] >= 5) && !(parsedArray[i * 2 + 1] >= 5) && (parsedArray.length % 2 === 0) ) {
            
            
            
            finsihedString = finsihedString + polybiusSquare[parsedArray[i * 2]][parsedArray[i * 2 + 1]]

        }

        
    }
    return finsihedString
} 
else if(!code.includes(".")) {


    let parsedArray = []


    for (let i = 0; i < code.length; i++) {
        for (let j = 0; j < polybiusSquare.length; j++) {
            for (let k = 0; k < polybiusSquare[j].length; k++) {
                

                if (polybiusSquare[j][k] === code[i].toLowerCase() ) {
                    parsedArray = [...parsedArray , j + 1 , k + 1  ]
                }
            
            }
            
        }
        
    }

 

    let finsihedCode = ""
    
    for (let i = 0; i < parsedArray.length; i++) {
        
        for (let j = 0; j < parsedArray[i]; j++) {
            
            finsihedCode += "."
            
        }
        finsihedCode += " "
    }
    return finsihedCode
}

}


console.log(tapCode("jag"))

console.log(tapCode(".... ... ... ..... . ..... ... ... .... ...."))



// Finished in 52 minutes