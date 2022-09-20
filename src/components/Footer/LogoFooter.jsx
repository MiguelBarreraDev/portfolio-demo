import './styles/LogoFooter.css'
import { SmoothLink } from '../shared'
import { navigationLinks } from '@/config'
import { PageLogo } from '../shared/PageLogo'

export default function LogoFooter () {
  return (
    <div className="container_logo">
      <div className="logo-icon">
        <PageLogo />
        <div className='link-to-home'>
          <SmoothLink to={navigationLinks.HOME.to}>Top</SmoothLink>
        </div>
      </div>
      <div className="expand-logo">
        Miguel Barrera
      </div>
    </div>
  )
}
