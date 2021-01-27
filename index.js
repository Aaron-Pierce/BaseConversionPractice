let bases = [2, 8, 10, 16];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

function randConsecutiveIndices(arr){
    let num = Math.floor(Math.random() * arr.length);
    return [num, (num + 1) % arr.length];
}

shuffle(bases);
let pick = randConsecutiveIndices(bases);
console.log("Convert base", bases[pick[0]], "to base", bases[pick[1]]);

let randomNumber = Math.floor(Math.random() * 255);
let startString = randomNumber.toString(bases[pick[0]]);
let answer = randomNumber.toString(bases[pick[1]]);
console.log(randomNumber);

document.body.innerHTML = `
    <h1>(${startString})<sub>${bases[pick[0]]}</sub></h1>
    <h1>to base ${bases[pick[1]]}</h1>
    <h2>Answer (hover): <span  id="answer">(${answer})<sub>${bases[pick[1]]}</sub></span></h2>
`