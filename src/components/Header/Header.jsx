import { useEffect, useState } from "react"
import './styles/Header.css'
import Nav from "./Nav"
import MenuButton from "./MenuButton"
import PageLogo from "../shared/PageLogo/PageLogo"
import { DelayUnmounting } from "../shared"
import { useVisibleScroll, useVisibleHeader } from "./hooks"
import { useGlobalMedia } from "@/hooks"

export default function Header () {
  const [ openMenu, setOpenMenu ] = useState(undefined)
  const [ showHeader, setShowHeader ] = useState(true)
  const [ showLine, setShowLine ] = useState(false)
  const { matches } = useGlobalMedia()

  const handleOpenMenu = ({ value=null }) => setOpenMenu(cs => value?? !cs)

  useVisibleScroll({ isVisible: !openMenu, delayEntry: 1000 })

  useEffect(() => {
    window
      .matchMedia('(min-width: 600px)')
      .addEventListener('change', e => {
        e.matches && handleOpenMenu({ value: false })
      })
  }, [])

  useEffect(() => {
    console.log({openMenu})
  }, [openMenu])
  useVisibleHeader({ setShowHeader, setShowLine })

  const visibleHeader = !showHeader && !openMenu && 'hidden-header'
  return (
    <header
      className={`header ${visibleHeader} ${showLine && 'show-line'}`}
    >
      <div className="container">
        <PageLogo />
        {matches.small ? (
          <DelayUnmounting isMounted={openMenu} delayTime={1000}>
            <Nav variant="dynamic" open={openMenu} handle={handleOpenMenu} />
          </DelayUnmounting>
        ) : (
          <Nav variant="static"/>
        )}
        {matches.small && (
          <MenuButton
            variant={openMenu ? 'close' : 'open'}
            handle={handleOpenMenu}
          />
        )}
      </div>
    </header>
  )
}
