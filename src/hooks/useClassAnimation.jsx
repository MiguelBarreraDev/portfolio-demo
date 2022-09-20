import { useEffect } from "react"

export default function useClassAnimation ({ ref, classes, dependencies=[]}) {
  useEffect(() => {
    ref.current.classList.add(classes)
  }, dependencies)
}
