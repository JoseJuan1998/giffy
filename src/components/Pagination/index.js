import React, { useEffect } from 'react'
import { useGifs } from '../../hooks/useGifs'

const Pagination = ({search}) => {
  const {page, setPage} = useGifs(search)

  const handleSetPreviousPage = () => {
    console.log('Page updated')
    setPage(p =>{
      if(p === 0) return 0
      return p - 1
    })
  }

  const handleSetNextPage = () => {
    console.log('Page updated')
    setPage(p =>{
      return p + 1
    })
  }

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