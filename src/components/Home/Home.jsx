import MainContent from './MainContent'
import './styles/Home.css'
import ToBottomAction from './ToBottomAction'
import { useGlobalMedia } from '@/hooks'

export default function Home () {
  const { matches } = useGlobalMedia()
  return (
    <section id='home' className="home">
      <MainContent />
      {matches.large && <ToBottomAction />}
    </section>
  )
}
