import { useRef } from 'react'
import ProjectImage from './ProjectImage'
import ProjectBody from './ProjectBody'
import './styles/CardProject.css'
import { useClassByIntersection } from '@/hooks'

export default function CardProject ({ name, description, urls, dir, projectKey }) {
  const { imageUrl, ...otherUrls } = urls
  const ref = useRef()

  const Body = () => (
    <ProjectBody name={name} description={description} urls={otherUrls} />
  )
  const Image = () => (
    <ProjectImage imageUrl={imageUrl} projectKey={projectKey}/>
  )
  
  useClassByIntersection({
    ref,
    classes: dir === 'ltr' ? 'fade-ltr' : 'fade-rtl',
    threshold: 0
  })

  return (
    <div className={`card-project ${dir}`} ref={ref}>
      {dir === 'rtl' ? (
        <>
          <Body /> 
          <Image />
        </>
      ) : (
        <>
          <Image /> 
          <Body /> 
        </>
      )}
    </div>
  )
}
