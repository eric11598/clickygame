import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    message: "",
    score: 0,
    highScore: 0,
    clickedArray: [],
  };

  componentDidMount() {
    this.setState({ 
      message: "Select a character!", 
      characters: characters});
  }


  selectCharacter = id => {
    // const friends = this.state.friends.filter(friend => friend.id !== id);

    
    let newCharacters = [];
    for (let i = 0; i < 12; i++) {
      let index = Math.floor(Math.random() * 12);

      while (newCharacters.includes(index)) {
        index = Math.floor(Math.random() * 12);
      }
      newCharacters.push(index);
  }

  let newScore = this.state.score
  let newHighScore = this.state.highScore
  let newMessage = this.state.message

  if(this.state.clickedArray.includes(id))
  {
    if (newScore>newHighScore)
      newHighScore = newScore

    newMessage = "You guessed incorrectly!"
    this.state.clickedArray.length=0
    newScore = 0
  }

  else
  {
    newMessage = "You guessed correctly!"
    this.state.clickedArray.push(id)
    newScore++
  }
    
    const newOrder = newCharacters.map(x => characters[x])

    this.setState({ 
      score: newScore,
      characters: newOrder,
      highScore: newHighScore,
      message: newMessage
     });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} highScore={this.state.highScore} message={this.state.message}/>

        <Title
        score={this.state.score}
        highScore={this.state.highScore}
        message={this.state.message}
        />
        
        {this.state.characters.map(character => (
          <CharacterCard
            selectCharacter={this.selectCharacter}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
