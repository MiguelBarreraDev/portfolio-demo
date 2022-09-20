import './styles/ProjectBody.css'
import CardText from './CardText'
import CardButtons from './CardButtons'

export default function ProjectBody ({ name, description, urls }) {
  const { liveProjectUrl, sourceCodeUrl } = urls

  return (
    <main className="body">
      <CardText
        name={name}
        description={description}
      />
      <CardButtons
        liveProjectUrl={liveProjectUrl}
        sourceCodeUrl={sourceCodeUrl}
      />
    </main>
  )
}
