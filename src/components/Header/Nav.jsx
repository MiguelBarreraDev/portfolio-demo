import { useGlobalMedia } from "@/hooks"
import { navigationList } from "@/utilities"
import {SmoothLink} from "../shared"
import MenuButton from "./MenuButton"
import SocialNetworks from "./SocialNetworks"
import './styles/Nav.css'

export default function Nav ({ open, handle }) {
  const { matches } = useGlobalMedia()

  const getSmoothLink = ({ to, key, name, handle }) => (
    <SmoothLink key={key} to={to} handle={handle}>{name}</SmoothLink>
  )

  return (
    <div className="container-nav">
      {open && <MenuButton variant='close' handle={handle}/>}
      <nav className="nav">
        {navigationList().map(link => getSmoothLink({ ...link, handle }))}
      </nav>
      {matches.small && <SocialNetworks />}
    </div>
  )
}
