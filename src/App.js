import './App.css'
import {Component} from 'react'

import ContextModule from './context/ContextModule'

import Rules from './components/Rules'

import GamePlay from './components/GamePlay'

import Header from './components/Header'

import GameResult from './components/GameResult'

class App extends Component {
  state = {
    score: 0,
    isPlaying: true,
    mySelection: {},
    comSelection: {},
    result: '',
  }

  onSettingValue = (mySelection, comSelection) => {
    if (
      (mySelection.id === 'ROCK' && comSelection.id === 'SCISSORS') ||
      (mySelection.id === 'SCISSORS' && comSelection.id === 'PAPER') ||
      (mySelection.id === 'PAPER' && comSelection.id === 'ROCK')
    ) {
      this.setState(prev => ({
        isPlaying: !prev.isPlaying,
        mySelection,
        comSelection,
        result: 'YOU WON',
        score: prev.score + 1,
      }))
    } else if (mySelection.id === comSelection.id) {
      this.setState(prev => ({
        isPlaying: !prev.isPlaying,
        mySelection,
        comSelection,
        result: 'IT IS DRAW',
        score: prev.score,
      }))
    } else {
      this.setState(prev => ({
        isPlaying: !prev.isPlaying,
        mySelection,
        comSelection,
        result: 'YOU LOSE',
        score: prev.score - 1,
      }))
    }
  }

  playAgain = () => {
    this.setState(prev => ({
      isPlaying: !prev.isPlaying,
      mySelection: {},
      comSelection: {},
      result: '',
    }))
  }

  render() {
    const {score, isPlaying, mySelection, comSelection, result} = this.state
    return (
      <ContextModule.Provider
        value={{
          score,
          isPlaying,
          mySelection,
          comSelection,
          result,
          onSettingValue: this.onSettingValue,
          playAgain: this.playAgain,
        }}
      >
        <div className="app">
          <Header />
          {isPlaying ? <GamePlay /> : <GameResult />}
          <Rules />
        </div>
      </ContextModule.Provider>
    )
  }
}

export default App
