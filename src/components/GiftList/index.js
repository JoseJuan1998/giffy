import Gift from '../Gift'
import {useGifts} from '../../hooks/useGifts'
import useNearElement from '../../hooks/useNearElement'
import { useCallback, useEffect, useRef } from 'react'
import debounce from 'just-debounce-it'

const GiftList = ({search}) => {
  const {loading, gifts, setPage} = useGifts(search)
  const externalRef = useRef()
  const {show} = useNearElement({externalRef: loading ? null : externalRef, once: false})

  const handleNextPage = useCallback(debounce(() => setPage(p => p + 1), 500), [])

  useEffect(function() {
    if(show) handleNextPage()
  }, [handleNextPage, show])

  return (
    <div className='grid'>
      {
        loading ? 
        <h1>Loading...</h1>
        :
        <>
          {
            gifts.map((img) => <Gift key={img.id} gift={img}/>)
          }
          <div id="visor" ref={externalRef}></div>
        </>
      }
    </div>
  )
}

export default GiftList