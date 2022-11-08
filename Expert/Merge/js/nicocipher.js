

 export default function encryptNicoCipher(message, key) {
    

    let keyArray = []
    for (let i = 0; i < key.length; i++) {
        keyArray = [...keyArray, {key: key[i].charCodeAt(0) - 96 , array:[]}] 
        
    }

    


for (let i = 0; i < Math.ceil(message.length/key.length)  ; i++) {
    for (let j = 0; j < keyArray.length; j++) {


        if (message[j+(i * key.length)] != null) {
            keyArray[j].array =  [...keyArray[j].array, message[j+(i * key.length)]]
        } else {
            keyArray[j].array =  [...keyArray[j].array, " "]
        }
    }
}


console.log(keyArray)

let sortedKeyArray = keyArray.sort(function (first, second) {
    return first.key - second.key;
 });


 let encryptedMessage = ""

 for (let j = 0; j < sortedKeyArray[0].array.length; j++) {
        for (let i = 0; i < sortedKeyArray.length; i++) {
        
     
        encryptedMessage += sortedKeyArray[i].array[j]
    }
    
 }

console.log(encryptedMessage)

}


export default function decryptNicoCipher(message, key) {
    

    let keyArray = []
    for (let i = 0; i < key.length; i++) {
        keyArray = [...keyArray, {key: key[i].charCodeAt(0) - 96 , array:[]}] 
        
    }
    let sortedKeyArray = []
    for (let i = 0; i < key.length; i++) {
        sortedKeyArray = [...sortedKeyArray, {key: key[i].charCodeAt(0) - 96 , array:[]}] 
        
    }

    sortedKeyArray = sortedKeyArray.sort(function (first, second) {
        return first.key - second.key;
     });
    
    

for (let i = 0; i < Math.ceil(message.length/key.length)  ; i++) {
    for (let j = 0; j < sortedKeyArray.length; j++) {


        if (message[j+(i * key.length)] != null) {
            sortedKeyArray[j].array =  [...sortedKeyArray[j].array, message[j+(i * key.length)]]
        } else {
            sortedKeyArray[j].array =  [...sortedKeyArray[j].array, " "]
        }
    }
}


for (let i = 0; i < sortedKeyArray.length; i++) {
    for (let j = 0; j < sortedKeyArray.length; j++) {
        if (keyArray[j].key === sortedKeyArray[i].key ) {
            keyArray[j].array = sortedKeyArray[i].array
        }
        
    }
    
}

console.log(keyArray)

console.log(sortedKeyArray)

 let decryptedMessage = ""

 for (let j = 0; j < sortedKeyArray[0].array.length; j++) {
    for (let i = 0; i < sortedKeyArray.length; i++) {
    
 
        decryptedMessage += keyArray[i].array[j]
}

}
 console.log(decryptedMessage)

}
encryptNicoCipher("message", "key")


decryptNicoCipher("emsasg e ", "key")



// time taken 45 minutes