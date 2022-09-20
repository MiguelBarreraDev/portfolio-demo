import { socialNetworksList } from '@/utilities'
import './styles/NavIntoFooter.css'
export default function NavIntoFooter () {
  return (
    <div className="container_social-networks">
    {socialNetworksList().map(link => (
      <a key={link.key} className='social-network' href={link.to}>
        {link.name}
      </a>
        ))}
    </div>
      )
}

