const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const questions = [
  `What's your name? Nicknames are also acceptable :)  `,
  `What's an activity you like doing?  `,
  `What do you listen to while doing that?  `,
  `Which meal is your favourite (eg: dinner, brunch, etc.)  `,
  `What's your favourite thing to eat for that meal?  `,
  `Which sport is your absolute favourite?  `,
  `What is your superpower? In a few words, tell us what you are amazing at!  `
]
const answers = []

const askQuestion = (index) => { 
  rl.question(questions[index], (answer) => {
    answers.push(`${questions[index]} ${answer}\n`);
    if(index === questions.length - 1) {
      console.log(`\nThank you for your valuable feedback \n${answers}`);
      rl.close();
    }
    else askQuestion(index +1)
  })
}
askQuestion(0);

