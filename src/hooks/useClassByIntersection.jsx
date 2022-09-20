import { useEffect } from 'react'

export default function useClassByIntersection ({
  ref, classes, dependencies=[], config, delay
}) {
  useEffect(() => {
    const handle = (entries) => {
      entries.map(entrie => {
        if (entrie.isIntersecting && !delay) {
          ref.current.classList.add(classes)
        }
        if (entrie.isIntersecting && delay){
          setTimeout(() => {
            ref.current.classList.add(classes)
          }, delay)
        }
      })
    }
    const observer = new IntersectionObserver(handle, config || {
      root: null,
    })
    observer.observe(ref.current)
  }, dependencies)
}
