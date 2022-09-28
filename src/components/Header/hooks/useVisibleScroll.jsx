import { useEffect } from "react"
import { handleVisibleScroll } from "@/utilities"

export default function useVisibleScroll ({ isVisible, delayEntry, delayExit}) {
  useEffect(() => {
    handleVisibleScroll({ visible: isVisible, delayEntry, delayExit })
  }, [isVisible])
  return {}
}
