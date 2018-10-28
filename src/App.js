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
    clickedArray: [],
  };

  selectCharacter = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    for (let i=0; i<5; i++) {
      setTimeout(function() {
        console.log(i);
      }, 100);
    }
    
    let newCharacters = [];
    for (let i = 0; i < 12; i++) {
      let index = Math.floor(Math.random() * 12);

      while (newCharacters.includes(index)) {
        index = Math.floor(Math.random() * 12);
      }
      newCharacters.push(index);
  }

    console.log(id)
    const newOrder = newCharacters.map(x => characters[x])

    
    this.setState({ score: this.state.score + 1 });
    this.setState({ characters:newOrder});
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title
        score={this.state.score}
        />
        
        {this.state.characters.map(friend => (
          <CharacterCard
            selectCharacter={this.selectCharacter}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
