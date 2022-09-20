import './styles/CardsContainer.css'

export default function CardsContainer ({ children, ...props }) {
  return (
    <ul className="soft-skills" {...props}>{children}</ul>
  )
}
