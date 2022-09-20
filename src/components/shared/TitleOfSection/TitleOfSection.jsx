import { useClassByIntersection } from '@/hooks'
import { useRef } from 'react'
import './styles/Title.css'

export default function TitleOfSection ({ section, title, styles}) {
  const ref = useRef()

  useClassByIntersection({
    ref,
    classes: 'fade-btt'
  })

  return (
    <div className="container-title" style={styles?.container} ref={ref}>
      <h3 className="title" style={styles?.title}>
        {section}
      </h3>
      <h2 className="subtitle" style={styles?.subtitle}>
        {title}
      </h2>
    </div>
  )
}
