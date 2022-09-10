import { useContext, useEffect, useState } from "react"
import { searchGif, getGif } from "../services/api"
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs (search) {
  const [page, setPage] = useState(INITIAL_PAGE)
  const {gifs, setGifs} = useContext(GifsContext)
  const [loading, setLoading] = useState(true)

  const setNewKey = () => {
    localStorage.setItem('defaultKeyword', search)
    return localStorage.getItem('defaultKeyword')
  }

  const keyword = search != null ? setNewKey() : localStorage.getItem('defaultKeyword')
  
  useEffect(() => {
    searchGif({search: keyword})
    .then(data => {
      setGifs(data)
      setLoading(false)
    })
    .catch(error => console.log(error))
  }, [keyword, setGifs])

  useEffect(() => {    
    searchGif({search: keyword, page})
    .then(data => {
      setLoading(false)
      if(gifs.length !== 0 && page > 0) return setGifs(d => d.concat(data))
    })
    .catch(error => console.log(error))
  }, [page, setPage])

  return {loading, gifs, page, setPage}
}

export function useSingleGif(id) {
  const gifs = useGlobalGifs()
  const globalGif = gifs.find(sGif => sGif.id === id)
  const [gif, setGif] = useState(globalGif);
  const {setGifs} = useContext(GifsContext)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if(!gif) {
      getGif(id)
        .then(data => {
        setGifs([]) 
        setGif(data)
    }).catch(error => {
      setIsError(true)
    })
    }
  }, [id, setGifs])

  return {gif, isError}
}  

export function useGlobalGifs() {
  return useContext(GifsContext).gifs
}