import ContactCards from './ContactCards'
import GetInTouch from './GetInTouch'
import './styles/MainContent.css'

export default function MainContent () {
  return (
    <main className="contact-body">
      <GetInTouch />
      <ContactCards />
    </main>
  )
}
