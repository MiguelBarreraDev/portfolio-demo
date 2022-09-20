import { useClassByIntersection } from '@/hooks'
import { forwardRef } from 'react'
import './styles/Card.css'

const Card = forwardRef(({ label, renderIcon, index }, ref) => {

  useClassByIntersection({
    ref,
    classes: 'fade-btt',
    delay: 200 * (index + 1)
  })

  return (
    <li ref={ref?? null} className='item'>
      <div className='solving-icon icon'>
        {renderIcon}
      </div>
      <p>{label}</p>
    </li>
  )
})
export default Card
// export default function Card ({ label, renderIcon }) {
//   return (
//     <li className='item'>
//       <div className='solving-icon icon'>
//         {renderIcon}
//       </div>
//       <p>{label}</p>
//     </li>
//   )
// }
