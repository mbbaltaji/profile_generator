const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//NESTED CALLBACK HELL IS FOR LEARNING PURPOSES
rl.question('What is your name Nicknames are also acceptable 😊? :', (name) => {
  rl.question('Whats an activity you like doing? :', (activity) => {
    rl.question('What do you listen to while doing that? :', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) :', (meal) => {
        rl.question("What's your favourite thing to eat for that meal? :", (food) => {
          rl.question('Which sport is your absolute favourite?', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superPower) => {
              console.log();
              console.log(`${name} likes ${activity} while listening to ${music}. ${name}'s favourite 
              favourite meal is ${food} and favourite time to eat it is at ${meal}. ${name}'s favourite
              sport is ${sport} and ${name}'s superpower is ${superPower}`);
              rl.close();

            });
          });
        });
      });
    });
  });
});

