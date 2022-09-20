import './styles/CardSocialNetwor.css'

export default function CardSocialNetwork ({ name, description, renderIcon }) {
  return (
    <div className='card-item'>
      <div className="text">
        <span>{name}</span>
        <span>{description}</span>
      </div>
      <div className="icon">
        {renderIcon}
      </div>
    </div>
  )
}
