import { useRef } from "react"
import CardSocialNetwork from "./CardSocialNetwork"
import RenderIcon from "../shared/RenderIcon"
import './styles/LinkCard.css'
import {useClassByIntersection} from "@/hooks"

export default function LinkCard ({ to, name, description }) {
  const ref = useRef()
  useClassByIntersection({
    ref,
    classes: 'fade-btt',
    threshold: 1.0
  })

  return (
    <a href={to} target='_blank' ref={ref}>
      <CardSocialNetwork
        name={name}
        description={description}
        renderIcon={<RenderIcon name={name}/>}
      />
    </a>
  )
}
