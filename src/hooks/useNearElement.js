import { useEffect, useState, useRef } from "react"

export default function useNearElement ({externalRef, once = true} = {}) {
  const elementRef = useRef()
  const [show, setShow] = useState(false)
  const element = externalRef ? externalRef.current : elementRef.current

  useEffect(function () {
    let observer
    
    const onChange = (entries, observer) => {
      const el = (entries[0])
      if(el.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: '20px'
      })
  
      if (element) observer.observe(element)
    })

    return () => observer && observer.disconnect()
  })

  return {show, elementRef}
}