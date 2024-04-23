import styled from 'styled-components'

export const Model = styled.div`
  background-color: #ffffff;
  background-size: cover;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`

export const CloseBtn = styled.button`
  cursor: pointer;
  margin-left: auto;
  border: none;
  outline: none;
`

export const Rulebtn = styled(CloseBtn)`
  bacground-color: #ffffff;
  border-radius: 8px;
  color: #223a5f;
  padding: 5px 10px;
`
