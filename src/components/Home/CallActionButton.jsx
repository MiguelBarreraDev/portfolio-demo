import { useRef } from 'react'
import { socialNetworksLinks } from '@/config'
import './styles/CallActionButton.css'
import SocialNetworks from './SocialNetworks'
import { useGlobalMedia } from '@/hooks'
import {ActionButton } from '../shared/ActionButton'
import { useClassAnimation } from '@/hooks'

export default function CallActionButton () {
  const { matches } = useGlobalMedia()
  const ref = useRef()

  useClassAnimation({
    ref: ref,
    classes: matches.large ? 'fade-ltr' : 'fade',
    dependencies: []
  })

  return (
    <div className='call-action-button grid-item' ref={ref}>
      <ActionButton
        href={socialNetworksLinks.LINKEDIN}
        label='Work together'
        addStyles='btn_work-together brightness filled'
      />
      {matches.large && <SocialNetworks /> }
    </div>
  )
}
