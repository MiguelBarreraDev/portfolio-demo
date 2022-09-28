import { useEffect, useRef, useState } from "react"

export default function DelayUnmounting ({ isMounted, delayTime, children }) {
  const ref = useRef()
  const [render, setRender] = useState(false)

  useEffect(() => {
    if (isMounted) {
      clearTimeout(ref.current)
      setRender(true)
    }
    else
      ref.current = setTimeout(() => setRender(false), delayTime)
  }, [isMounted])

  return render ? children : null
}
