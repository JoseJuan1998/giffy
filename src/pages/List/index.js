import { useState } from 'react'
import { useLocation } from 'wouter'
import GifList from '../../components/GifList'
import GifSearch from '../../components/GifSearch'
// import { useSEO } from '../../hooks/useSEO'
import { Helmet } from 'react-helmet'

const List = () => {

  const [search, setSearch] = useState()
  const pushLocation = useLocation()[1]
  // const title = Boolean(search) ? {title: search} : {title: 'List'}

  // useSEO({...title, description: 'list of gifs'})

  const goHome = () => {
    pushLocation('/')
  }

  return (
    <>
      <Helmet>
        <title>List | Gifs</title>
        <meta name="description" content="List of gifs" />
      </Helmet>
      <GifSearch setSearch={setSearch} />
      <h3 className=".home-button" onClick={goHome} style={{cursor: 'pointer'}}>{'< Home'}</h3>
      {/* <Pagination search={search} /> */}
      <GifList search={search} />
    </>
  )
}

export default List