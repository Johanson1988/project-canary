PROJECT 3

# PROJECT CANARY

<img width="1019" alt="Screen Shot 2019-12-10 at 3 14 20 PM" src="https://user-images.githubusercontent.com/52801554/70536838-c342cf00-1b5f-11ea-91eb-c82e84d1796e.png">

## Description

This is a live multiplayer game to prove the tech skills and knowledge gained during the bootcamp. A registered user will be able to create a game, select a field, UX, data or webdev, or even the three of them. Then, anonymous players will be able to join the game using a QR code.

----

## User Stories

- **ERROR PAGES**
  - **404** - page doesn’t exist 
  - **500** - internal server error
- **HOME PAGE - anonymous**
  - log in
  - sign up
    - nickname
    - bootcamp
    - avatar
  - log out redirects here
- **HOME PAGE - registered user**
  - Create game
  - User stats
- **USER PROFILE**
  - modify: avatar, nickname, bootcamp
- **CREATE GAME**
  - Select field: Data, UX, WebDev, All
  - Get questions from the collection
  - Game name
  - Show QR - waiting for players
  - Game starting - Countdown
- **PLAY GAME** - Main device
  - Show question - possible answers x4
  - Show right answer - partial score
  - transition screen to next question
  - show final scoreboard
- **GAME** - Player device
  - Welcome Screen
    - Add nickname, avatar
  - Waiting for other players
  - Question - possible answers screens
  - Transition screen to next question
  - Show final score

## 

## Front-End (React):

## Routes

| Component                | **Route**               | **Description**                                              | Permissions    |
| ------------------------ | ----------------------- | ------------------------------------------------------------ | -------------- |
| `SplashPage`             | `/`                     | Main page route.  Renders home component.                    | user only      |
| `SigninPage`             | `/login`                | Renders `login` form in `signin` component.                  | anon only      |
| `SigninPage`             | `/signup`               | Renders `signup` form in `signin` component.                 | anon only      |
|                          |                         |                                                              |                |
| `CreateGamePage`         | `/create-game`          | Renders the private game screen.                             | user only      |
| `WaitingForPlayersPage`  | `/game/waiting`         | Main device waiting for players screen showing QR code       | user only      |
| `StartGamePage`          | `/game/start-game`      | Renders the countdown to start game once the game creator decides all players are in. | user only      |
| `PlayingGamePage`        | `/game/playing`         | Renders game screen with questions on the main device.       | user only      |
| `GameFinishedPage`       | `/game/finished`        | Renders score board and winner on the main device.           | user only      |
|                          |                         |                                                              |                |
| `UserProfilePage`        | `/user/edit-profile`    | Renders `edit-profile` form view.                            | user only      |
|                          |                         |                                                              |                |
| `AddQuestionPage`        | `/user/add-question/`   | Renders add-question component                               | user only      |
|                          |                         |                                                              |                |
| `PlayerWelcomePage`      | `/player/join-game`     | After reading the QR, render screen with info and asking user data in player device. | anonymous/user |
| `PlayerGamePage`         | `/player/join-game`     | Once the game creator starts the game, game screen will be render in all players device. | anonymous/user |
| `PlayerGameFinishedPage` | `/player/game-finished` | Game screen showing game results in player device.           | anonymous/user |

## Components

- SplashPage

- SigninPage

- CreateGamePage

- WaitingForPlayersPage

- StartGamePage

- PlayingGamePage

- GameFinishedPage

- UserProfilePage

- AddQuestionPage

- PlayerWelcomePage

- PlayerGamePage

- PlayerGameFinishedPage

  

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Game Service
  - game.create()
  - game.waiting(gameId)
  - game.start(gameId)
  - game.sendQuestion(gameId)
  - game.getAnswer(gameId)
  - game.finish(gameId)
- Player Service
  - player.joinGame(gameId, playerId)
  - player.startGame(gameId, playerId)
  - player.getQuestion(gameId, playerId)
  - player.sendAnswer(gameId,playerId)
  - player.finishGame(gameId)
- Question Service
  - question.add(QuestionId)
- User service
  - user.details(id)
  - user.add(id)
  - user.delete(id)
  - user.modify(id)

## 

# Server / Backend

## Models

**User** model

```js
{
        Name: String,
        GamesPlayed: [Game ObjectID],
        profilePic: String, //(cloudinary)
        bootcamp: enum[data,webdev,ux]
        gamesCreated: [Game ObjectID],
        gamesWon: Number
    }
```

**Game** model

```js
{
        questions: [Question ObjectID],
        players: [Player ObjectID],
        winner: Player ObjectID,
        createdBy: User ObjectID,
        scoreboard: {player:score}
        started: Boolean,
        finished: Boolean,
    }
```

**Question** model

```js
{
        type: enum[data,webdev,ux],
        createdBy: User ObjectID,
        rightAnswer: String,
        wrongAnswers: [String],
        picture: String, //(cloudinary)
        BACKLOG(difficulty: enum[easy,hard])
    }
```

**Player** model

```js
{
        Name: String,
        Score: Number,
        UserID: User ObjectID //(if applicable)
        //BACKLOG picture: String (cloudinary)
        bootcamp: enum[data,webdev,ux,other],
        client: Socket Client Object //if we can
    }
```

## API Endpoints (backend routes)

| HTTP Method | URL                       | Request Body                                            | Success status | Error Status | Description                                                  |
| ----------- | ------------------------- | ------------------------------------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile    `       | Saved session                                           | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`            | {name, email, password}                                 | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`             | {username, password}                                    | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`            | (empty)                                                 | 204            | 400          | Logs out the user                                            |
| POST        | `/game`                   |                                                         | 201            | 400          | Creates a game                                               |
| GET         | `/game/:gameid`           | {id}                                                    | 200            | 400          | Show the game to be played. Fails if startgame or endgame flag are true. |
| POST        | /player                   | {name, bootcamp, Client?}                               | 201            | 400          | Creates a new player in the database                         |
| PATCH       | /player                   | score                                                   | 200            | 400          | Updates the player score per round                           |
| PATCH       | `/game/:gameid/addplayer` | {player._id}                                            | 200            | 400          | adds joined player to list of players in game                |
| PATCH       | `/game/:gamid/startgame`  |                                                         | 200            | 400          | Changes start game flag to true                              |
| PATCH       | `/game/:gameid/endgame`   | {winner}                                                | 200            | 400          | Changes end game flag to true and sets the game winner       |
| DELETE      | `/profile/:userid`        |                                                         | 204            | 400          | Delete player info                                           |
| PUT         | `/profile/:userid`        | {name, avatar-url}                                      | 200            | 400          | Edit player info                                             |
| POST        | `/profile/addquestion`    | {question, rightAnswer, wrongAnswers, type, createdBy } | 201            | 400          | Creates a new question in the database                       |

## Backlog

Animations

Add minigames

Add sounds

Previous games history

Add the ability to choose number of players in a game

[See the Trello board.](https://trello.com/b/tZ9rgU3H/project3)