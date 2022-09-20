import { useId } from "react"
import { CardProject } from "./CardProject"
import projectsList from './data'
import './styles/MainContent.css'

export default function MainContent () {
  const handleProjectData = (projectData, index)  => {
    const { key, ...otherData } = projectData
    otherData.dir = index % 2 === 0 ? 'rtl' : 'ltr'
    return <CardProject {...otherData} projectKey={key} key={useId()} />
  }

  return (
    <div className="container-projects">
      {projectsList.map(handleProjectData)}
    </div>
  )
}
