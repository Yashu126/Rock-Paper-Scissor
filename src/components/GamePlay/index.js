import {Gameplay, ChoiceBtn} from './styledComponents'

import ContextModule from '../../context/ContextModule'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const GamePlay = () => (
  <ContextModule.Consumer>
    {value => {
      const {onSettingValue} = value

      const handleSelection = mySelection => {
        const comSelection = choicesList[Math.floor(Math.random() * 3)]
        onSettingValue(mySelection, comSelection)
      }
      return (
        <Gameplay>
          <ChoiceBtn
            onClick={() => handleSelection(choicesList[0])}
            data-testid="rockButton"
            type="button"
          >
            <img
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              width="100"
            />
          </ChoiceBtn>
          <ChoiceBtn
            onClick={() => handleSelection(choicesList[1])}
            data-testid="scissorsButton"
            type="button"
          >
            <img
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              width="100"
            />
          </ChoiceBtn>
          <ChoiceBtn
            onClick={() => handleSelection(choicesList[2])}
            data-testid="paperButton"
            type="button"
          >
            <img
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              width="100"
            />
          </ChoiceBtn>
        </Gameplay>
      )
    }}
  </ContextModule.Consumer>
)
export default GamePlay
