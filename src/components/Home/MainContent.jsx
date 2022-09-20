import Branding from './Branding'
import Image from './Image'
import CallActionButton from './CallActionButton'
import './styles/MainContent.css'

export default function MainContent () {
  return (
    <main className='main-content grid-container'>
      <Branding />
      <Image />
      <CallActionButton />
    </main>
  )
}
