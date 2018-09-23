import React, { Component } from 'react';
import logo from './logo.svg';      
import Character from './components/character.js';
import './App.css';

class App extends Component {
  state= {
    emojis,
    clickedEmojisIds: [],
    score: 0,
    goal: 8,
    status: ""
  };
    shuffleScoreCard = id => {
    let clickedEmojisIds = this.state.clickedEmojiIds;
    if(clickedEmojisIds.includes(id)){
      this.setState({ clickedEmojisIds: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
      return;
    }else{
      clickedEmojisIds.push(id)

      if(clickedEmojisIds.length === 8){
        this.setState({score: 8, status: "You Won! Great Job, Smartie! Click to play again!", clickedEmojisIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ Emojis, clickedEmojisIds, score: clickedEmojisIds.length, status: " " });

      for (let i = Emojis.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [Emojis[i], Emojis[j]] = [Emojis[j], Emojis[i]];
      }
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game</h1>
          <p className="App-intro">
          Click on an image to earn points, but don't click on any more than once!
          </p>

        </header>

  <Body>
    {this.state.emojis.map(Emojis => (

        <Character
        shuffleCharacterCard={this.shuffleCharacterCard}image="/images/images(1).jpg" name="Nerd"/>
        <Character image="/images/images(2).jpg" name="Dab"/>
        <Character image="/images/images(3).jpg" name="Shades"/>
        <Character image="/images/images(4).jpg" name="Bling"/>
        <Character image="/images/images(5).jpg" name="Book Worm"/>
        <Character image="/images/images(6).jpg" name="Trump"/>
        <Character image="/images/images(7).jpg" name="Monkey"/>
        <Character image="/images/images(8).jpg" name="Artist"/>
        <Character image="/images/images(9).jpg" name="Focused"/>
        <Character image="/images/images(10).jpg" name="$$$$"/>
        <Character image="/images/images(11).jpg" name="Karate"/>
        <Character image="/images/images(12).jpg" name="Hot Head"/>
        
    ))}
    </Body>
    <footer>
      <p>Clicky Game</p>
    </footer>
      
       
      </div>
    );
  }
}

export default App;
