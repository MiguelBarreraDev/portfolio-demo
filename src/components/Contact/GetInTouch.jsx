import { useRef } from 'react'
import { CoffeeIcon } from '@/assets/images/icons'
import { socialNetworksLinks } from '@/config'
import { useClassByIntersection } from '@/hooks'
import { ActionButton } from '../shared/ActionButton'
import './styles/GetInTouch.css'

export default function GetInTouch () {
  const ref = useRef()
  
  useClassByIntersection({
    ref,
    classes: 'fade',
    config: {
      threshold: 0.5
    }
  })

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 32
      }}
    >
      <div className="message">
        Do not hesitate to contact me if you have any questions or want us to work together. I am always open to new ideas and will do my best to reply to you as soon as possible.
      </div>
      <div className="container-button">
        <ActionButton
          href={socialNetworksLinks.LINKEDIN}
          label='Say Hello'
          addStyles='brightness'
        />
        <div className="container_coffee-icon">
          <CoffeeIcon />
        </div>
      </div>
    </div>
  )
}
