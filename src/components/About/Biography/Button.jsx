import { ToBottomIcon } from '@/assets/images/icons'
import './styles/Button.css'

export default function ButtonViewCV () {
  return (
    <div className="btn_view-cv">
      <a href="#">
        <span>View CV</span>
        <span>
          <ToBottomIcon />
        </span>
      </a>
    </div>
  )
}
