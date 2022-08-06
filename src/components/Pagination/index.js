import React, { useEffect } from 'react'
import { useGifts } from '../../hooks/useGifts'

const Pagination = ({search}) => {
  const {page, setPage} = useGifts(search)

  const handleSetPreviousPage = () => {
    setPage(p =>{
      if(p === 0) return 0
      return p - 1
    })
  }

  const handleSetNextPage = () => {
    setPage(p =>{
      return p + 1
    })
  }

  useEffect(() => {console.log(page)}, [page])

  return (
    <div className='btn-container'>
       {
        page > 0 && 
          <button 
            className="previous-page" 
            onClick={handleSetPreviousPage}
          >
            Previous Page
          </button>
        }

        <span>Page {page + 1}</span>

        <button 
          className="next-page" 
          onClick={handleSetNextPage}
        >
          Next Page
        </button>
      </div>
  )
}

export default Pagination