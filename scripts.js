var quotesObj = {
  quote1: {
    quote: '"People sleep peacefully in their beds at night only because rough men stand ready to do violence on their behalf."',
    person: "George Orwell"
  },
  quote2: {
    quote: '"Veni,Vidi,Vici"',
    person: "Julius Caesar"
  },
  quote3: {
    quote: '"Care about what other people think and you will always be their prisoner."',
    person: "Lao-Tzu"
  },
  quote4: {
    quote: '"Necessity is the mother of invention."',
    person: "Anonymous"
  },
  quote5: {
    quote: '"A man who chases two rabbits catches neither."',
    person: "Chinese Proverb"
  },
  quote6: {
    quote: '"When I let go of what I am, I become what I might be."',
    person: "Lao-Tzu"
  },
  quote7: {
    quote: '"If you\'re bored with life, if you don\'t get up every morning with a burning desire to do things - you don\'t have enough goals."',
    person: "Lou Holtz" 
  },
  quote8: {
    quote: '"Treasure the love you receive above all. It will survive long after your gold and good health have vanished."',
    person: "Og Mandino"
  },
  quote9: {
    quote: '"Success is not something you pursue. Success is something you attract by the person you become."',
    person: "Jim Rohn"
  },
  quote10: {
    quote: '"We choose our joys and sorrows long before we experience them."',
    person: "Khalil Gibran"
  },
  quote11: {
    quote: '"If we have no peace it is because we have forgotten that we belong to each other."',
    person: "Mother Teresa"
  },
  quote12: {
    quote: '"Time you enjoy wasting, was not wasted."',
    person: "John Lennon"
  },
  quote13: {
    quote: '"Pressure can burst a pipe or pressure can make a diamond."',
    person: "Robert Horry"
  },
  quote14: {
    quote: '"Life is really simple, but we insist on making it complicated."',
    person: "Confucious"
  },
  quote15: {
    quote: '"Great works are performed, not by strength, but perseverance."',
    person: "Dr. Samuel Johnson"
  },
  quote16: {
    quote: '"Decide that you want it more than you are afraid of it."',
    person: "Bill Cosby"
  },
  quote17: {
    quote: '"No act of kindness, no matter how small, is ever wasted."',
    person: "Aesop"
  },
  quote18: {
    quote: '"Be the change you want to see in the world."',
    person: "Mahatma Gandhi"
  },
  quote19: {
    quote: '"Forever is composed of nows."',
    person: "Emily Dickinson"
  },
  quote20: {
    quote: '"Happiness depends upon ourselves."',
    person: "Aristotle"
  },
  quote21: {
    quote: '"Follow your bliss."',
    person: "Joseph Campbell"
  },
  quote22: {
    quote: '"If you\'ll not settle for anything less than your best, you will be amazed at what you can accomplish in your lives."',
    person: "Vince Lombardi"
  },
  quote23: {
    quote: '"We are shaped by our thoughts - we become what we think. When the mind is pure, joy follows like a shadow that never leaves."',
    person: "Buddha"
  }
}

var quotes = Object.keys(quotesObj);

var chosenQuote = quotes[Math.round(Math.random() * quotes.length)];
var currentQuote = quotesObj[chosenQuote].quote;
var currentPerson = quotesObj[chosenQuote].person;

$("h1").text(currentQuote);
$("p").text("-" + currentPerson);
$(".logo").attr("href","https://twitter.com/intent/tweet?text=" + currentQuote + " -" + currentPerson);

function generateQuote() {
  var newQuote = quotes[Math.round(Math.random() * quotes.length)];

  if (newQuote == chosenQuote) {
    generateQuote();
  } else {
    $("h1").text(quotesObj[newQuote].quote);
    $("p").text("-" + quotesObj[newQuote].person);
    $(".logo").attr("href","https://twitter.com/intent/tweet?text=" + quotesObj[newQuote].quote + " -" + quotesObj[newQuote].person);
  }
}