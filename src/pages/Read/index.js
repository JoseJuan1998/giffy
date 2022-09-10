import { Redirect, useLocation } from "wouter"
import Gif from "../../components/Gif"
import { useSingleGif } from "../../hooks/useGifs"
// import { useSEO } from "../../hooks/useSEO"
import { Helmet } from 'react-helmet'

const Read = ({params: {id}}) => {
  const pushLocation = useLocation()[1]

  const {gif, isError} = useSingleGif(id)

  const goList = () => {
    pushLocation('/gifs')
  }

  // useSEO({title: Gif.title, description: `detail of ${Gif.title}`})

  if(isError) return <Redirect to='/404' />

  return (
    <>
      <Helmet>
        <title>{`${gif.title} | Giffy`}</title>
        <meta name="description" content={`Detail of ${gif.title}`} />
      </Helmet>
      { gif && <Gif gif={gif} /> }
      <span style={{cursor: 'pointer'}} onClick={goList} >{"< Back"}</span>
    </>
  )
}

export default Read