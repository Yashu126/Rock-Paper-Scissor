import styled from 'styled-components'

export const HeaderCon = styled.div`
  padding: 15px;
  border: 1px solid #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`

export const ScoreBox = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Rps = styled.h1`
  margin: 5px;
  color: #ffffff;
  width: 120px;
`

export const Scorep = styled.p`
  color: #223a5f;
  text-align: center;
  margin: 5px;
`

export const Score = styled(Scorep)`
  font-family: Roboto;
  font-size: 26px;
  font-weight: bold;
`
