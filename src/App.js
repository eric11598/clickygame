import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    score: 0,
    highScore: 0,
    clickedArray: [],
  };

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

  if(this.state.clickedArray.includes(id))
  {
    if (newScore>newHighScore)
      newHighScore = newScore

    this.state.clickedArray.length=0
    newScore = 0
  }

  else
  {
    this.state.clickedArray.push(id)
    newScore++
  }
    
    const newOrder = newCharacters.map(x => characters[x])

    this.setState({ 
      score: newScore,
      characters: newOrder,
      highScore: newHighScore
     });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title
        score={this.state.score}
        highScore={this.state.highScore}
        />
        
        {this.state.characters.map(friend => (
          <CharacterCard
            selectCharacter={this.selectCharacter}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
