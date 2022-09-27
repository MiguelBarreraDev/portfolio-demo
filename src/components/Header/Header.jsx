import { useEffect, useState, useCallback } from "react"
import './styles/Header.css'
import Nav from "./Nav"
import MenuButton from "./MenuButton"
import { useGlobalMedia } from "@/hooks"
import PageLogo from "../shared/PageLogo/PageLogo"

function DelayUnmounting ({ isMounted, delayTime, children }) {
  const [render, setRender] = useState(isMounted)
  useEffect(() => {
    if (isMounted)
      setRender(isMounted)
    else
      setTimeout(()=> setRender(isMounted), delayTime)
  }, [isMounted])
  return render ? children : null
}

export default function Header () {
  const [ openMenu, setOpenMenu ] = useState(false)
  const [ showHeader, setShowHeader ] = useState(true)
  const [ showLine, setShowLine ] = useState(false)
  const { matches } = useGlobalMedia()

  const handleMenu = useCallback(() => setOpenMenu(cs => !cs), [])

  useEffect(() => {
    const body = document.querySelector('body')
    openMenu
      ? body.classList.add('overflow-hidden')
      : setTimeout(() => body.classList.remove('overflow-hidden'), 1000)
  }, [openMenu])

  useEffect(() => {
    window
      .matchMedia('(min-width: 600px)')
      .addEventListener('change', (e) => e.matches && setOpenMenu(false))
  }, [])

  // TODO: REFACTOR
  useEffect(() => {
    let oldValue = 0, newValue = 0;
    window.addEventListener('scroll', () => {
      newValue = window.scrollY
      if (newValue < oldValue) {
        setShowHeader(true)
      } else {
        setShowHeader(false)
        setShowLine(false)
      }
      if (newValue < 30){
        setShowLine(false)
        return
      }
      else{
        setShowLine(true)
        newValue > oldValue && setShowLine(false)
      }
      oldValue = newValue
    })
  }, [])

  return (
    <header className={`header ${!showHeader && !openMenu && 'hidden-header'} ${showLine && 'show-line'}`}>
      <div className="container">
        <PageLogo />
        {matches.medium && <Nav />}
        {matches.small && (
          <DelayUnmounting isMounted={openMenu} delayTime={1000}>
            <Nav open={openMenu} handle={handleMenu}/>
          </DelayUnmounting>
        )}
        {matches.small && <MenuButton variant="open" handle={handleMenu}/>}
      </div>
    </header>
  )
}
