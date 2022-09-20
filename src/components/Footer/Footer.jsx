import './styles/Footer.css'
import NavIntoFooter from './NavIntoFooter'
import LogoFooter from './LogoFooter'
import { useClassByIntersection } from '@/hooks'
import { useRef } from 'react'

export default function Footer () {
  const ref = useRef()

  useClassByIntersection({
    ref,
    classes: 'fade-btt'
  })

  return (
    <footer className='footer' ref={ref}>
      <div className="container-content">
        <LogoFooter />
        <NavIntoFooter />
      </div>
    </footer>
  )
}
