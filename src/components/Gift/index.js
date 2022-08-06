import { lazy, Suspense, memo } from "react"
import useNearElement from "../../hooks/useNearElement"

const Gift = lazy(
  () => import('./Gift')
)

function LazyGift ({gift}) {
  const {show, elementRef} = useNearElement()

  return <div ref={elementRef} className="picture">
      {
        show && <Suspense fallback={'Loading...'}>
          <Gift gift={gift}/>
        </Suspense>
      }
  </div>
}

export default memo(LazyGift)