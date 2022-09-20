import { Link } from "react-scroll"

export default function SmoothLink ({ to, children, handle=() => {} }) {
  return (
    <Link
      spy={true}
      activeClass="active"
      to={to}
      smooth={true}
      onClick={handle}
    >
      {children}
    </Link>
  )
}
