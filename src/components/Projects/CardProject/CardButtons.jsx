import { ActionButton } from '@/components/shared/ActionButton'
import './styles/CardButtons.css'

export default function CardButtons ({ liveProjectUrl, sourceCodeUrl }) {
  return (
    <div className="container-buttons">
      <ActionButton
        href={liveProjectUrl}
        addStyles='filled brightness'
        label='Live project'
      />
      <ActionButton
        href={sourceCodeUrl}
        addStyles='outlined brightness'
        label='Source code'
      />
    </div>
  )
}
