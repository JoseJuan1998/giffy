import { lazy, Suspense, memo } from "react"
import useNearElement from "../../hooks/useNearElement"

const Gif = lazy(
  () => import('./Gif')
)

function LazyGif ({gif}) {
  const {show, elementRef} = useNearElement()

  return <div ref={elementRef} className="picture">
      {
        show && <Suspense fallback={'Loading...'}>
          <Gif gif={gif}/>
        </Suspense>
      }
  </div>
}

export default memo(LazyGif)