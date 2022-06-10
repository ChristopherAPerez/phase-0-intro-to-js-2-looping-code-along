function writeCards(nameArray, eventType){
    let newArray = [];
    let i = 0;
    while(i < nameArray.length){
        newArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventType} gift!`);
        i++;
    }
    return newArray;
}

function countDown(number){
    while(number >= 0){
        console.log(number--);
        if(number < 0){
            return;
        }
    }
}