import { ToBottomIcon } from '@/assets/images/icons'
import './styles/Button.css'
import CVDocument from '@/assets/documents/CVMiguelBarreraPalomares.pdf'

export default function ButtonViewCV () {
  return (
    <div className="btn_view-cv">
      <a onClick={() => open(CVDocument)} target='_blank'>
        <span>View CV</span>
        <span>
          <ToBottomIcon />
        </span>
      </a>
    </div>
  )
}
