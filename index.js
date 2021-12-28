// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
            debugger;
  }
  return gifts;
}

function writeCards(fromNames = [], eventName) {
    for (counter = 0; counter < fromNames.length; counter++) {
        console.log(`Thank you, ${fromNames[counter]} for the wonderful ${eventName} gift!`);
            debugger;
    }
    return fromNames, eventName;
}

function countdown(subtract = []) {
    while (subtract >= 0) {
        console.log(subtract--);
    }
    return subtract;
}

wrapGifts(gifts);
writeCards(["Charlie", "Samip", "Ali"], "birthday");
countdown(subtract = 10);

