import { GitHubIcon, InstagramIcon, LinkedinIcon } from "@/assets/images/icons"
import { socialNetworksLinks } from "@/config"
import './styles/SocialNetworks.css'

export default function SocialNetworks () {
  return (
    <div className="social-networks">
      <a
        href={socialNetworksLinks.GITHUB.to}
        target="_blank"
        className="link-github"
      >
        <GitHubIcon />
      </a>
      <a
        href={socialNetworksLinks.INSTAGRAM.to}
        className="link-instagram"
      >
        <InstagramIcon />
      </a>
      <a
        href={socialNetworksLinks.LINKEDIN.to}
        target="_blank"
        className="link-linkedin"
      >
        <LinkedinIcon />
      </a>
    </div>
  )
}
