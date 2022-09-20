import { GitHubIcon, LinkedinIcon, InstagramIcon } from '@/assets/images/icons'

export default function RenderIcon ({ name }) {
  const icons = {
    GitHub: () => <GitHubIcon />,
    Linkedin: () => <LinkedinIcon />,
    Instagram: () => <InstagramIcon />
  }
  const TargetIcon = icons[name]

  return (
    <TargetIcon />
  )
}
