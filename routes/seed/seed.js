const mongoose = require("mongoose");
const Question = require('./../../models/Question');
require('dotenv').config();



const questions = [ { questionType: 'webdev',
question: 'Which of these selectors is the most specific?',
rightAnswer: '#news h1',
wrongAnswer1: '.news h2',
wrongAnswer2: '#news',
wrongAnswer3: 'h1',
photoUrl: 'https://internetingishard.com/html-and-css/css-selectors/css-selectors-1f0064.png',
created_by: '5df241030d13316631e8161d',
difficulty: 'hard' },
{ questionType: 'webdev',
question: 'Which one of these is NOT a semantic HTML tag?',
rightAnswer: 'div',
wrongAnswer1: 'main',
wrongAnswer2: 'nav',
wrongAnswer3: 'article',
photoUrl: 'https://p1.pxfuel.com/preview/386/749/243/programming-html-code-coding.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'What is not ES6',
rightAnswer: 'console.log(dogs + out)',
wrongAnswer1: 'let dogsOut = true',
wrongAnswer2: "()=>console.log('who let the dogs out)'",
wrongAnswer3: "[...dogs + '']",
photoUrl: "https://p1.pxfuel.com/preview/386/749/243/programming-html-code-coding.jpg",
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'Which is the correct syntax to declare a variable in JavaScript?',
rightAnswer: 'var myName = "Tom";',
wrongAnswer1: 'myName === "Tom";',
wrongAnswer2: 'String myName = "Tom"',
wrongAnswer3: 'var "Tom" = myName;',
photoUrl: 'https://p1.pxfuel.com/preview/386/749/243/programming-html-code-coding.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'Which one of these conditionals will cause the real Slim Shady to Stand up?',
rightAnswer: 'realSlimShady ? standUp() : null',
wrongAnswer1: 'if(!realSlimShady){ standUp(); } else { return null }',
wrongAnswer2: 'if(realSlimShady){ standUp();} else { return null }',
wrongAnswer3: 'if(realSlimShady === true) { return null } else{ standUp() }',
photoUrl: 'https://townsquare.media/site/482/files/2019/07/Eminem-The-Real-Slim-Shady.png',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'Which is the correct way of declaring a function?',
rightAnswer: 'function ironBeers() { drinkBeers(); }',
wrongAnswer1: 'function ironBeers { drinkBeers(); }',
wrongAnswer2: 'var ironBeers() { drinkBeers(); }',
wrongAnswer3: 'function var = i = () { drinkBeers(); }',
photoUrl: 'https://p1.pxfuel.com/preview/386/749/243/programming-html-code-coding.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'Which of these array methods returns a new array?',
rightAnswer: 'Map',
wrongAnswer1: 'forEach',
wrongAnswer2: 'Reduce',
wrongAnswer3: 'Push',
photoUrl: 'https://p1.pxfuel.com/preview/386/749/243/programming-html-code-coding.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'True or False, a request "get" must have a body?',
rightAnswer: 'False',
wrongAnswer1: 'True',
wrongAnswer2: 'What is get?',
wrongAnswer3: 'What is body?',
photoUrl: 'https://p1.pxfuel.com/preview/386/749/243/programming-html-code-coding.jpg',
created_by: '5df241030d13316631e8161d',
difficulty: 'hard' },
{ questionType: 'webdev',
question: 'Why do we use the routes out of the file app.js?',
rightAnswer: 'To have a cleaner code',
wrongAnswer1: 'console.log(things)',
wrongAnswer2: 'to make the developers cry',
wrongAnswer3: 'no idea',
photoUrl: "https://p1.pxfuel.com/preview/386/749/243/programming-html-code-coding.jpg",
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'What list of terms is related to mongoose?',
rightAnswer: 'Schema, Documents, Model, Connection',
wrongAnswer1: 'Documents, Relational, Connection',
wrongAnswer2: 'Headache, Explosion, Nightmare',
wrongAnswer3: 'Choose me! I am correct!',
photoUrl: 'https://p1.pxfuel.com/preview/386/749/243/programming-html-code-coding.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'Which one is a correct fetch?',
rightAnswer: 'console.log("Pablo is the best Ta ";))',
wrongAnswer1: 'fetch{ (/theBestTA).then((chloe)=>console.log(chloe))}',
wrongAnswer2: 'fetch.then((marce)=> console.log(marce))',
wrongAnswer3: 'fetch(/theBestTA).then((pablo)=> console.log(pablo))',
photoUrl: 'https://p1.pxfuel.com/preview/386/749/243/programming-html-code-coding.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'Which one is the correct way to insert partial in handlebars?',
rightAnswer: '{{> navbar this}}',
wrongAnswer1: '{{navbar>}}',
wrongAnswer2: '(>navbar this)',
wrongAnswer3: '{{navbar this}}',
photoUrl: 'https://p1.pxfuel.com/preview/386/749/243/programming-html-code-coding.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'What is the correct syntax to require a package?',
rightAnswer: "'var express = require('express')'",
wrongAnswer1: "'express.require('express')'",
wrongAnswer2: "'var express = import('express')'",
wrongAnswer3: 'require.beers.because.friday.plz',
photoUrl: 'https://p1.pxfuel.com/preview/386/749/243/programming-html-code-coding.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'What does NPM mean?',
rightAnswer: 'Node Package Manager',
wrongAnswer1: 'New Package Maintenance',
wrongAnswer2: 'Naranja Pingüino Moda',
wrongAnswer3: 'Node.js Package Maintenance',
photoUrl: 'https://i.kym-cdn.com/entries/icons/facebook/000/022/466/blackholes.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'If you want to return updated data, you have to add it inside a mongoose Update',
rightAnswer: "'We haven't done it yet'",
wrongAnswer1: '{giveMeTheData: true}',
wrongAnswer2: '{new: false}',
wrongAnswer3: '{new: true}',
photoUrl: 'https://p1.pxfuel.com/preview/386/749/243/programming-html-code-coding.jpg',
created_by: '5df241030d13316631e8161d',
difficulty: 'hard' },
{ questionType: 'webdev',
question: 'You have 10 sec !!! What is the correct answer ? let car = "2" && "3";console.log(car);',
rightAnswer: '"3"',
wrongAnswer1: '"2"',
wrongAnswer2: '"5"',
wrongAnswer3: 'Qué dices tío!!',
photoUrl: 'https://p1.pxfuel.com/preview/386/749/243/programming-html-code-coding.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'In cascade StyleSheets, which one of the following are adjacent siblings?',
rightAnswer: 'A + B',
wrongAnswer1: 'A ~ B',
wrongAnswer2: 'A > B',
wrongAnswer3: 'A B',
photoUrl: 'https://p1.pxfuel.com/preview/386/749/243/programming-html-code-coding.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'We are in a party, there is an array of girls and an array of guys. How can we join them for the party?',
rightAnswer: 'girls.concat(guys)',
wrongAnswer1: 'gentlemen.join[ladies]',
wrongAnswer2: 'badBoys.classList = loser',
wrongAnswer3: 'guys.shift(girls)',
photoUrl: 'https://p1.pxfuel.com/preview/386/749/243/programming-html-code-coding.jpg',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'Question webdev 18',
rightAnswer: 'Right answebdev 18',
wrongAnswer1: 'Wrong Answer 1 webdev 18',
wrongAnswer2: 'Wrong Answer 2 webdev 18',
wrongAnswer3: 'Wrong Answer 3 webdev18',
photoUrl: 'https://p1.pxfuel.com/preview/386/749/243/programming-html-code-coding.jpg 18',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'webdev',
question: 'Question webdev 19',
rightAnswer: 'Right answebdev 19',
wrongAnswer1: 'Wrong Answer 1 webdev 19',
wrongAnswer2: 'Wrong Answer 2 webdev 19',
wrongAnswer3: 'Wrong Answer 3 webdev19',
photoUrl: 'https://p1.pxfuel.com/preview/386/749/243/programming-html-code-coding.jpg 19',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Question data 20',
rightAnswer: 'Right ansdata 20',
wrongAnswer1: 'Wrong Answer 1 data 20',
wrongAnswer2: 'Wrong Answer 2 data 20',
wrongAnswer3: 'Wrong Answer 3 webdev20',
photoUrl: 'photoUrl data 20',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Question data 21',
rightAnswer: 'Right ansdata 21',
wrongAnswer1: 'Wrong Answer 1 data 21',
wrongAnswer2: 'Wrong Answer 2 data 21',
wrongAnswer3: 'Wrong Answer 3 webdev21',
photoUrl: 'photoUrl data 21',
created_by: '5df241030d13316631e8161d',
difficulty: 'hard' },
{ questionType: 'data',
question: 'Question data 22',
rightAnswer: 'Right ansdata 22',
wrongAnswer1: 'Wrong Answer 1 data 22',
wrongAnswer2: 'Wrong Answer 2 data 22',
wrongAnswer3: 'Wrong Answer 3 webdev22',
photoUrl: 'photoUrl data 22',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Question data 23',
rightAnswer: 'Right ansdata 23',
wrongAnswer1: 'Wrong Answer 1 data 23',
wrongAnswer2: 'Wrong Answer 2 data 23',
wrongAnswer3: 'Wrong Answer 3 webdev23',
photoUrl: 'photoUrl data 23',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Question data 24',
rightAnswer: 'Right ansdata 24',
wrongAnswer1: 'Wrong Answer 1 data 24',
wrongAnswer2: 'Wrong Answer 2 data 24',
wrongAnswer3: 'Wrong Answer 3 webdev24',
photoUrl: 'photoUrl data 24',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Question data 25',
rightAnswer: 'Right ansdata 25',
wrongAnswer1: 'Wrong Answer 1 data 25',
wrongAnswer2: 'Wrong Answer 2 data 25',
wrongAnswer3: 'Wrong Answer 3 webdev25',
photoUrl: 'photoUrl data 25',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Question data 26',
rightAnswer: 'Right ansdata 26',
wrongAnswer1: 'Wrong Answer 1 data 26',
wrongAnswer2: 'Wrong Answer 2 data 26',
wrongAnswer3: 'Wrong Answer 3 webdev26',
photoUrl: 'photoUrl data 26',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Question data 27',
rightAnswer: 'Right ansdata 27',
wrongAnswer1: 'Wrong Answer 1 data 27',
wrongAnswer2: 'Wrong Answer 2 data 27',
wrongAnswer3: 'Wrong Answer 3 webdev27',
photoUrl: 'photoUrl data 27',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Question data 28',
rightAnswer: 'Right ansdata 28',
wrongAnswer1: 'Wrong Answer 1 data 28',
wrongAnswer2: 'Wrong Answer 2 data 28',
wrongAnswer3: 'Wrong Answer 3 webdev28',
photoUrl: 'photoUrl data 28',
created_by: '5df241030d13316631e8161d',
difficulty: 'hard' },
{ questionType: 'data',
question: 'Question data 29',
rightAnswer: 'Right ansdata 29',
wrongAnswer1: 'Wrong Answer 1 data 29',
wrongAnswer2: 'Wrong Answer 2 data 29',
wrongAnswer3: 'Wrong Answer 3 webdev29',
photoUrl: 'photoUrl data 29',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Question data 30',
rightAnswer: 'Right ansdata 30',
wrongAnswer1: 'Wrong Answer 1 data 30',
wrongAnswer2: 'Wrong Answer 2 data 30',
wrongAnswer3: 'Wrong Answer 3 webdev30',
photoUrl: 'photoUrl data 30',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Question data 31',
rightAnswer: 'Right ansdata 31',
wrongAnswer1: 'Wrong Answer 1 data 31',
wrongAnswer2: 'Wrong Answer 2 data 31',
wrongAnswer3: 'Wrong Answer 3 webdev31',
photoUrl: 'photoUrl data 31',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Question data 32',
rightAnswer: 'Right ansdata 32',
wrongAnswer1: 'Wrong Answer 1 data 32',
wrongAnswer2: 'Wrong Answer 2 data 32',
wrongAnswer3: 'Wrong Answer 3 webdev32',
photoUrl: 'photoUrl data 32',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Question data 33',
rightAnswer: 'Right ansdata 33',
wrongAnswer1: 'Wrong Answer 1 data 33',
wrongAnswer2: 'Wrong Answer 2 data 33',
wrongAnswer3: 'Wrong Answer 3 webdev33',
photoUrl: 'photoUrl data 33',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Question data 34',
rightAnswer: 'Right ansdata 34',
wrongAnswer1: 'Wrong Answer 1 data 34',
wrongAnswer2: 'Wrong Answer 2 data 34',
wrongAnswer3: 'Wrong Answer 3 webdev34',
photoUrl: 'photoUrl data 34',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Question data 35',
rightAnswer: 'Right ansdata 35',
wrongAnswer1: 'Wrong Answer 1 data 35',
wrongAnswer2: 'Wrong Answer 2 data 35',
wrongAnswer3: 'Wrong Answer 3 webdev35',
photoUrl: 'photoUrl data 35',
created_by: '5df241030d13316631e8161d',
difficulty: 'hard' },
{ questionType: 'data',
question: 'Question data 36',
rightAnswer: 'Right ansdata 36',
wrongAnswer1: 'Wrong Answer 1 data 36',
wrongAnswer2: 'Wrong Answer 2 data 36',
wrongAnswer3: 'Wrong Answer 3 webdev36',
photoUrl: 'photoUrl data 36',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Question data 37',
rightAnswer: 'Right ansdata 37',
wrongAnswer1: 'Wrong Answer 1 data 37',
wrongAnswer2: 'Wrong Answer 2 data 37',
wrongAnswer3: 'Wrong Answer 3 webdev37',
photoUrl: 'photoUrl data 37',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Question data 38',
rightAnswer: 'Right ansdata 38',
wrongAnswer1: 'Wrong Answer 1 data 38',
wrongAnswer2: 'Wrong Answer 2 data 38',
wrongAnswer3: 'Wrong Answer 3 webdev38',
photoUrl: 'photoUrl data 38',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'data',
question: 'Question data 39',
rightAnswer: 'Right ansdata 39',
wrongAnswer1: 'Wrong Answer 1 data 39',
wrongAnswer2: 'Wrong Answer 2 data 39',
wrongAnswer3: 'Wrong Answer 3 webdev39',
photoUrl: 'photoUrl data 39',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
question: 'When is usability testing useful?',
rightAnswer: 'All the others',
wrongAnswer1: 'To identify problems in a product already exists',
wrongAnswer2: 'To test new ideas or features',
wrongAnswer3: 'Wrong Answer 3 webdev40', //aqui
photoUrl: 'photoUrl ux 40',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
question: 'Question ux 41',
rightAnswer: 'Right ansux 41',
wrongAnswer1: 'Wrong Answer 1 ux 41',
wrongAnswer2: 'Wrong Answer 2 ux 41',
wrongAnswer3: 'Wrong Answer 3 webdev41',
photoUrl: 'photoUrl ux 41',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
question: 'Question ux 42',
rightAnswer: 'Right ansux 42',
wrongAnswer1: 'Wrong Answer 1 ux 42',
wrongAnswer2: 'Wrong Answer 2 ux 42',
wrongAnswer3: 'Wrong Answer 3 webdev42',
photoUrl: 'photoUrl ux 42',
created_by: '5df241030d13316631e8161d',
difficulty: 'hard' },
{ questionType: 'ux',
question: 'Question ux 43',
rightAnswer: 'Right ansux 43',
wrongAnswer1: 'Wrong Answer 1 ux 43',
wrongAnswer2: 'Wrong Answer 2 ux 43',
wrongAnswer3: 'Wrong Answer 3 webdev43',
photoUrl: 'photoUrl ux 43',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
question: 'Question ux 44',
rightAnswer: 'Right ansux 44',
wrongAnswer1: 'Wrong Answer 1 ux 44',
wrongAnswer2: 'Wrong Answer 2 ux 44',
wrongAnswer3: 'Wrong Answer 3 webdev44',
photoUrl: 'photoUrl ux 44',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
question: 'Question ux 45',
rightAnswer: 'Right ansux 45',
wrongAnswer1: 'Wrong Answer 1 ux 45',
wrongAnswer2: 'Wrong Answer 2 ux 45',
wrongAnswer3: 'Wrong Answer 3 webdev45',
photoUrl: 'photoUrl ux 45',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
question: 'Question ux 46',
rightAnswer: 'Right ansux 46',
wrongAnswer1: 'Wrong Answer 1 ux 46',
wrongAnswer2: 'Wrong Answer 2 ux 46',
wrongAnswer3: 'Wrong Answer 3 webdev46',
photoUrl: 'photoUrl ux 46',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
question: 'Question ux 47',
rightAnswer: 'Right ansux 47',
wrongAnswer1: 'Wrong Answer 1 ux 47',
wrongAnswer2: 'Wrong Answer 2 ux 47',
wrongAnswer3: 'Wrong Answer 3 webdev47',
photoUrl: 'photoUrl ux 47',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
question: 'Question ux 48',
rightAnswer: 'Right ansux 48',
wrongAnswer1: 'Wrong Answer 1 ux 48',
wrongAnswer2: 'Wrong Answer 2 ux 48',
wrongAnswer3: 'Wrong Answer 3 webdev48',
photoUrl: 'photoUrl ux 48',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
question: 'Question ux 49',
rightAnswer: 'Right ansux 49',
wrongAnswer1: 'Wrong Answer 1 ux 49',
wrongAnswer2: 'Wrong Answer 2 ux 49',
wrongAnswer3: 'Wrong Answer 3 webdev49',
photoUrl: 'photoUrl ux 49',
created_by: '5df241030d13316631e8161d',
difficulty: 'hard' },
{ questionType: 'ux',
question: 'Question ux 50',
rightAnswer: 'Right ansux 50',
wrongAnswer1: 'Wrong Answer 1 ux 50',
wrongAnswer2: 'Wrong Answer 2 ux 50',
wrongAnswer3: 'Wrong Answer 3 webdev50',
photoUrl: 'photoUrl ux 50',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
question: 'Question ux 51',
rightAnswer: 'Right ansux 51',
wrongAnswer1: 'Wrong Answer 1 ux 51',
wrongAnswer2: 'Wrong Answer 2 ux 51',
wrongAnswer3: 'Wrong Answer 3 webdev51',
photoUrl: 'photoUrl ux 51',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
question: 'Question ux 52',
rightAnswer: 'Right ansux 52',
wrongAnswer1: 'Wrong Answer 1 ux 52',
wrongAnswer2: 'Wrong Answer 2 ux 52',
wrongAnswer3: 'Wrong Answer 3 webdev52',
photoUrl: 'photoUrl ux 52',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
question: 'Question ux 53',
rightAnswer: 'Right ansux 53',
wrongAnswer1: 'Wrong Answer 1 ux 53',
wrongAnswer2: 'Wrong Answer 2 ux 53',
wrongAnswer3: 'Wrong Answer 3 webdev53',
photoUrl: 'photoUrl ux 53',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
question: 'Question ux 54',
rightAnswer: 'Right ansux 54',
wrongAnswer1: 'Wrong Answer 1 ux 54',
wrongAnswer2: 'Wrong Answer 2 ux 54',
wrongAnswer3: 'Wrong Answer 3 webdev54',
photoUrl: 'photoUrl ux 54',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
question: 'Question ux 55',
rightAnswer: 'Right ansux 55',
wrongAnswer1: 'Wrong Answer 1 ux 55',
wrongAnswer2: 'Wrong Answer 2 ux 55',
wrongAnswer3: 'Wrong Answer 3 webdev55',
photoUrl: 'photoUrl ux 55',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
question: 'Question ux 56',
rightAnswer: 'Right ansux 56',
wrongAnswer1: 'Wrong Answer 1 ux 56',
wrongAnswer2: 'Wrong Answer 2 ux 56',
wrongAnswer3: 'Wrong Answer 3 webdev56',
photoUrl: 'photoUrl ux 56',
created_by: '5df241030d13316631e8161d',
difficulty: 'hard' },
{ questionType: 'ux',
question: 'Question ux 57',
rightAnswer: 'Right ansux 57',
wrongAnswer1: 'Wrong Answer 1 ux 57',
wrongAnswer2: 'Wrong Answer 2 ux 57',
wrongAnswer3: 'Wrong Answer 3 webdev57',
photoUrl: 'photoUrl ux 57',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
question: 'Question ux 58',
rightAnswer: 'Right ansux 58',
wrongAnswer1: 'Wrong Answer 1 ux 58',
wrongAnswer2: 'Wrong Answer 2 ux 58',
wrongAnswer3: 'Wrong Answer 3 webdev58',
photoUrl: 'photoUrl ux 58',
created_by: '5df241030d13316631e8161d' },
{ questionType: 'ux',
question: 'Question ux 59',
rightAnswer: 'Right ansux 59',
wrongAnswer1: 'Wrong Answer 1 ux 59',
wrongAnswer2: 'Wrong Answer 2 ux 59',
wrongAnswer3: 'Wrong Answer 3 webdev59',
photoUrl: 'photoUrl ux 59',
created_by: '5df241030d13316631e8161d' } ];

mongoose
  .connect("mongodb://localhost:27017/canaryDDBB", {
    keepAlive: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
  })
  .then( () => {
    console.log(`Connected to database`);
    Question.collection.drop();
    Question.insertMany(questions)
      .then(_=>console.log('Questions seeded'))
      .catch(err => console.log(err));
  })
  .catch( (err) => console.error(err));