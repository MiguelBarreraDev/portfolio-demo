import { useGlobalMedia } from "@/hooks"
import { navigationList } from "@/utilities"
import {useEffect, useState} from "react"
import {SmoothLink} from "../shared"
import MenuButton from "./MenuButton"
import SocialNetworks from "./SocialNetworks"
import './styles/Nav.css'

function DelayUnmounting ({ isMounted, delayTime, children }) {
  const [render, setRender] = useState(isMounted)

  useEffect(() => {
    if (isMounted)
      setRender(isMounted)
    else
      setTimeout(()=> setRender(isMounted), delayTime)
  }, [isMounted])

  return render ? children : null
}

export default function Nav ({ open, handle }) {
  const { matches } = useGlobalMedia()

  const getSmoothLink = ({ to, key, name, handle }) => (
    <SmoothLink key={key} to={to} handle={handle}>{name}</SmoothLink>
  )

  return (
    <div className={`container-nav ${open !== undefined && !open && 'remove'}`}>
      <DelayUnmounting isMounted={open} delayTime={1000}>
        <MenuButton variant='close' handle={handle}/>
      </DelayUnmounting>
      <nav className='nav'>
        {navigationList().map(link => getSmoothLink({ ...link, handle }))}
      </nav>
      {matches.small && <SocialNetworks />}
    </div>
  )
}
