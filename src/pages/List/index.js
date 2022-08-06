import { useState } from 'react'
import { useLocation } from 'wouter'
import GiftList from '../../components/GiftList'
import GiftSearch from '../../components/GiftSearch'

const List = () => {

  const [search, setSearch] = useState()

  const pushLocation = useLocation()[1]

  const goHome = () => {
    pushLocation('/')
  }

  return (
    <>
      <GiftSearch setSearch={setSearch} />
      <h3 className=".home-button" onClick={goHome} style={{cursor: 'pointer'}}>{'< Home'}</h3>
      {/* <Pagination search={search} /> */}
      <GiftList search={search} />
    </>
  )
}

export default List