import Button from './Button'
import IButton from '../types/IButton'

const ButtonSelect = ({ buttons } : {buttons: IButton[]}) => {
  return <div>
    {buttons.map((b, idx) => <Button {...b} key={`button-${idx}`}/>)}
  </div>
}

export default ButtonSelect
