import React, {useCallback, memo} from 'react'

const GiftSearch = ({setSearch}) => {
  const handleSearch = useCallback((e) => {
    const keyword = e.target.value !== '' ? e.target.value : null
    setSearch(keyword)
  }, [setSearch])

  return (
    <input type={'text'} onChange={handleSearch} placeholder={'Search'} style={{marginBlockEnd: '20px'}} />
  )
} 

export default memo(GiftSearch)