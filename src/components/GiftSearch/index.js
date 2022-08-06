import debounce from 'just-debounce-it'
import React, {useCallback, memo} from 'react'

const GiftSearch = ({setSearch}) => {
  const handleSearch = useCallback(debounce(
    (e) => {
      const keyword = e.target.value !== '' ? e.target.value : null
      setSearch(keyword)
    },
    500
  ), [setSearch])

  return (
    <input type={'text'} onChange={handleSearch} placeholder={'Search'} style={{marginBlockEnd: '20px'}} />
  )
} 

export default memo(GiftSearch)