import { useMedia } from 'react-media'

const GLOBAL_MEDIA_QUERIES = {
  small: '(max-width: 599px)',
  medium: '(min-width: 600px)',
  large: '(min-width: 900px)'
}

export default function useGlobalMedia () {
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES })
  return { matches }
}
