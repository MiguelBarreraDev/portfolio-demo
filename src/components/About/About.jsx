import { Biography } from './Biography'
import { TitleOfSection } from '../shared'
import { SoftSkills } from './SoftSkills'
import './styles/About.css'

export default function About () {
  return (
    <section className="about">
      <TitleOfSection section='About' title='Skills, focus & goals'/>
      <SoftSkills />
      <Biography />
    </section>
  )
}
