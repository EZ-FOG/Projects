//The user will be able to input a question, then our program will output a random fortune.
//enter your name inside the string
userName = '';
//enter your question inside the string
userQuestion = '';
randomNumber = Math.floor(Math.random() * 8);
eightBall = '';

userName? console.log('Hello, ', userName, '!') : console.log('Hello!');

userQuestion? console.log(userName, ' asks: ', userQuestion) : console.log('No question asked...');

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

userQuestion? console.log(eightBall) : console.log('')
