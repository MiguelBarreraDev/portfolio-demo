import profile from '@/assets/images/myself/profile.png'
import { useClassByIntersection, useGlobalMedia } from '@/hooks'
import { useRef } from 'react'
import './styles/ProfileImage.css'

export default function ProfileImage () {
  const { matches } = useGlobalMedia()
  const ref = useRef()

  useClassByIntersection({
    ref,
    classes: matches.large ? 'fade-ltr' : 'fade',
  })

  return (
    <div className='image-profile' ref={ref}>
      <div>DEVELOPER</div>
      <img src={profile} alt="photo, profile of Miguel Barrera" />
    </div>
  )
}
