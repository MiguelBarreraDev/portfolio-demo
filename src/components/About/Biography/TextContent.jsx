import Text from './Text'
import { useGlobalMedia, useClassByIntersection } from '@/hooks'
import { useRef } from 'react'
import ButtonViewCV from './Button'
import './styles/TextContent.css'

export default function TextContent () {
  const { matches } = useGlobalMedia()
  const ref = useRef()

  useClassByIntersection({
    ref,
    classes: matches.large ? 'fade-rtl' : 'fade',
  })

  return (
    <div className="biography" ref={ref}>
      <Text />
      <ButtonViewCV />
    </div>
  )
}
