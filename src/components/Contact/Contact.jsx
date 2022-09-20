import { TitleOfSection } from '../shared'
import MainContent from './MainContent'
import { Footer } from '../Footer'
import './styles/Contact.css'


export default function Contact () {
  return (
    <section className="contact">
      <TitleOfSection section='Contact' title='Get in touch'/>
      <MainContent />
      <Footer />
    </section>
  )
}
