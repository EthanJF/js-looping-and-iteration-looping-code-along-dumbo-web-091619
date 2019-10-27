// Code your solutions in this file
function writeCards(arrayOfNames, eventName) {
    const result = []
    for (let i = 0; i < arrayOfNames.length; i++) {
        result.push(`Thank you, ${arrayOfNames[i]}, for the wonderful surprise gift!`);
    }
    return result;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}