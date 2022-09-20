import { TitleOfSection } from '../shared'
import MainContent from './MainContent'
import './styles/Projects.css'

export default function Projects () {
  return (
    <section id='projects' className="projects">
      <TitleOfSection section='Projects' title='Latest Projects' />
      <MainContent />
    </section>
  )
}
