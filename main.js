// ze code, here
let div = document.getElementById('main');  // div element for inserting phrases
let next = document.getElementById('next'); // button element for new phrases

// ze array
let eightBallPhrases = ['It is certain',
'It is decidedly so',
'Without a doubt',
'Yes, definitely',
'You may rely on it',
'As I see it, yes',
'Most likely',
'Outlook good',
'Yes',
'Signs point to yes',
'Reply hazy try again',
'Ask again later',
'Better not tell you now',
'Cannot predict now',
'Concentrate and ask again',
'Don\'t count on it',
'My reply is no',
'My sources say no',
'Outlook not so good',
'Very doubtful'];

// ze functions

function randomizer(arrayCount){
  return Math.floor((Math.random() * arrayCount));
}

function eightBallMagic(array){
  return eightBallPhrases[randomizer(array.length)];
}

// element modifications

div.innerHTML = eightBallMagic(eightBallPhrases);

next.onclick = function() { // click to get a new response
  div.innerHTML = eightBallMagic(eightBallPhrases);
};
