const handleVisibleScroll = ({ visible, delayEntry=0, delayExit=0 }) => {
  const bodyClassHandle = document.querySelector('body').classList
  const hiddenScroll = () => bodyClassHandle.add('overflow-hidden')
  const showScroll = () => bodyClassHandle.remove('overflow-hidden')

  visible
    ? setTimeout(showScroll, delayEntry)
    : setTimeout(hiddenScroll, delayExit)
}

export default handleVisibleScroll
