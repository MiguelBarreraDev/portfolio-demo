import { ToBottomIcon } from '../../assets/images/icons'
import { Link } from 'react-scroll'
import './styles/ToBottomAction.css'

export default function ToBottomAction () {
  const SmoothLink = ({ to, children  }) => (
    <Link
      spy={true}
      activeClass="active"
      to={to}
      smooth={true}
    >
      {children}
    </Link>
  )
  return (
    <div className="container_to-bottom-action">
      <SmoothLink to="projects">
        <ToBottomIcon />
      </SmoothLink>
    </div>
  )
}
