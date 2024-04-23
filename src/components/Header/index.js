import {HeaderCon, ScoreBox, Rps, Score, Scorep} from './styledComponents'

import ContextModule from '../../context/ContextModule'

const Header = () => (
  <ContextModule.Consumer>
    {value => {
      const {score} = value
      return (
        <HeaderCon>
          <Rps>Rock Paper Scissors</Rps>
          <ScoreBox>
            <Scorep>Score</Scorep>
            <Score>{score}</Score>
          </ScoreBox>
        </HeaderCon>
      )
    }}
  </ContextModule.Consumer>
)

export default Header
