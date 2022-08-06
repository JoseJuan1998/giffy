import { useContext, useEffect, useState } from "react"
import { searchGift } from "../services/api"
import GiftsContext from '../context/GiftsContext'

const INITIAL_PAGE = 0

export function useGifts (search) {
  const [page, setPage] = useState(INITIAL_PAGE)
  const {gifts, setGifts} = useContext(GiftsContext)
  const [loading, setLoading] = useState(true)

  const keyword = search != null ? search : localStorage.getItem('defaultKeyword')
  
  useEffect(() => {
    searchGift({search: keyword})
    .then(data => {
      setGifts(data)
      setLoading(false)
    })
    .catch(error => console.log(error))
  }, [keyword, setGifts])

  useEffect(() => {    
    searchGift({search: keyword, page})
    .then(data => {
      setGifts(gifts.concat(data))
      console.log(gifts)
      setLoading(false)
    })
    .catch(error => console.log(error))
  }, [page, setGifts])

  return {loading, gifts, page, setPage}
}

export function useGlobalGifts() {
  return useContext(GiftsContext).gifts
}