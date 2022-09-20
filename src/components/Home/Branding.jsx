import { useRef } from 'react'
import { useGlobalMedia } from '@/hooks'
import { useClassAnimation } from '@/hooks'
import './styles/Branding.css'


export default function Branding () {
  const { matches } = useGlobalMedia()
  const ref = useRef()

  useClassAnimation({
    ref: ref,
    classes: matches.large ? 'fade-ltr' : 'fade',
    dependencies: []
  })

  return (
    <div className='branding grid-item' ref={ref}>
      <span className='say-hi'>Hi!, my name is</span>
      <h1>Miguel Barrera</h1>
      <h3>FullStack Web Developer,
        <span className='replace-effect'> Specialized In FrontEnd.</span></h3>
    </div>
  )
}
