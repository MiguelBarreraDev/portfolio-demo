import './styles/CardText.css'

export default function CardText ({ name, description }) {
  return (
    <div className='information'>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  )
}
