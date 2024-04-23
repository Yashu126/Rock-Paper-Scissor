import ContextModule from '../../context/ContextModule'

import {
  ResultCon,
  YouOppCon,
  YouOpp,
  Para,
  Res,
  PlayAgainBtn,
} from './styledComponents'

const GameResult = () => (
  <ContextModule.Consumer>
    {value => {
      const {mySelection, result, playAgain, comSelection} = value
      return (
        <ResultCon>
          <YouOppCon>
            <YouOpp>
              <Para>YOU</Para>
              <img src={mySelection.imageUrl} alt="your choice" width="120" />
            </YouOpp>
            <YouOpp>
              <Para>OPPONENT</Para>
              <img
                src={comSelection.imageUrl}
                alt="opponent choice"
                width="120"
              />
            </YouOpp>
          </YouOppCon>
          <YouOpp>
            <Res>{result}</Res>
            <PlayAgainBtn type="button" onClick={playAgain}>
              PLAY AGAIN
            </PlayAgainBtn>
          </YouOpp>
        </ResultCon>
      )
    }}
  </ContextModule.Consumer>
)

export default GameResult
