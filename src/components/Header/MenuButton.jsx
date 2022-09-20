import { CloseIcon, MenuIcon } from "@/assets/images/icons"
import './styles/MenuButton.css'

export default function MenuButton ({ handle, variant }) {
  return (
    <div className="menu-button">
      <button
        className="button"
        onClick={handle}
      >
        {variant === 'open' && <MenuIcon />}
        {variant === 'close' && <CloseIcon/>}
      </button>
    </div>
  )
}
