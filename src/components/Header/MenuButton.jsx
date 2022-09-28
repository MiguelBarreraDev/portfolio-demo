import { CloseIcon, MenuIcon } from "@/assets/images/icons"
import { useRef } from "react"
import { DelayUnmounting } from "../shared"
import './styles/MenuButton.css'

export default function MenuButton ({ handle, variant }) {
  const ref = useRef()
  const handleClick = () => {
    handle(variant === 'open')
  }
  return (
    <div className="menu-button">
      <button
        className='button'
        onClick={handleClick}
        ref={ref}
      >
        <DelayUnmounting isMounted={variant === 'open'} delayTime={1000}>
          <div className={`menu-icon ${variant !== 'open' && 'remove' }`}>
            <MenuIcon />
          </div>
        </DelayUnmounting>
        <DelayUnmounting isMounted={variant === 'close'} delayTime={1000}>
          <div className={`close-icon ${variant === 'open' && 'remove'}`}>
            <CloseIcon/>
          </div>
        </DelayUnmounting>
      </button>
    </div>
  )
}
