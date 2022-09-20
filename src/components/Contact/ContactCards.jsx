import { socialNetworksList } from '@/utilities'
import LinkCard from './LinkCard'
import './styles/ContactCards.css'

export default function ContactCards () {
  const generateLinkCard = data => {
    const { name, to, description, key } = data
    return <LinkCard
      name={name}
      description={description}
      to={to}
      key={key}
    />
  }
  return (
    <div className="container-cards-contact">
      {socialNetworksList().map(generateLinkCard)}
    </div>
  )
}
