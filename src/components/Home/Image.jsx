import { useRef } from 'react'
import { Developer } from '@/assets/images/ilustrations'
import { useGlobalMedia } from '@/hooks'
import './styles/Image.css'
import { useClassAnimation } from '@/hooks'

export default function Image () {
  const { matches } = useGlobalMedia()
  const ref = useRef()

  useClassAnimation({
    ref: ref,
    classes: matches.large ? 'fade-rtl' : 'fade',
    dependencies: []
  })

  return (
    <div className='image grid-item' ref={ref}>
      <Developer />
    </div>
  )
}
