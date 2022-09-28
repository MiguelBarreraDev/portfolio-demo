import { useEffect } from "react";

export default function useVisibleHeader ({ setShowHeader, setShowLine }) {
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

  return {}
}
