import './styles/ProjectImage.css'

export default function ProjectImage ({ imageUrl, projectKey }) {
  return (
    <aside className={`image ${projectKey?? null}`}>
      <img src={imageUrl} alt="project image" />
    </aside>
  )
}
