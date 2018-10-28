import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);

    let newFriends = [];
    for (let i = 0; i < 12; i++) {
      let index = Math.floor(Math.random() * 12);

      while (newFriends.includes(index)) {
        index = Math.floor(Math.random() * 12);
      }
      newFriends.push(index);
  }
    // Set this.state.friends equal to the new friends array
    
    console.log(friends)

    const final = newFriends.map(x => friends[x])
    console.log(final)


    this.setState({ friends:final });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
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
