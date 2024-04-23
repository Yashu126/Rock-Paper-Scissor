import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {Model, CloseBtn, Rulebtn} from './styledComponents'

const Rules = () => (
  <Popup trigger={<Rulebtn type="button"> RULES </Rulebtn>} modal>
    {close => (
      <Model>
        <CloseBtn type="button" onClick={close}>
          <RiCloseLine />
        </CloseBtn>
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
          width="80%"
        />
      </Model>
    )}
  </Popup>
)

export default Rules
