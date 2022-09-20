import GrowthIcon from '@/assets/images/icons/GrowthIcon'
import TeamIcon from '@/assets/images/icons/TeamIcon'
import SolvingIcon from '@/assets/images/icons/SolvingIcon'
import backimage from '@/assets/images/backgrounds/back.jpg'
import './styles/SoftSkills.css'
import CardsContainer from './CardsContainer'
import Card from './Card'
import {createRef} from 'react'

const cardsContent = [
  {
    label: 'Problem Solving',
    icon: <SolvingIcon />,
    key: 'solvingicon'
  },
  {
    label: 'Team Player Attitude',
    icon: <TeamIcon />,
    key: 'teamicon'
  },
  {
    label: 'Growth Mindset',
    icon: <GrowthIcon />,
    key: 'growthicon'
  },
]

export default function SoftSkills () {
  return (
    <div className="container_soft-skills" style={{ "--bg-url":  `url(${backimage})`}}>
      <CardsContainer className='soft-skills'>
        {cardsContent.map((card, index) => {
          const ref = createRef()
          return <Card ref={ref} index={index} renderIcon={card.icon} label={card.label} key={card.key}/>
      })}
      </CardsContainer>
    </div>
  )
}
