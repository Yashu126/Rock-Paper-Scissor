import React from 'react'

const ContextModule = React.createContext({
  isPlaying: true,
  score: 0,
  mySelection: null,
  comSelection: null,
  result: '',
  onSettingValue: () => {},
  playAgain: () => {},
})

export default ContextModule
