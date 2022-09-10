import { useLocation } from 'wouter'
import { Helmet } from 'react-helmet'

const Home = () => {

  const pushLocation = useLocation()[1]

  const goList = () => {
    pushLocation('/Gifs')
  }

  return (
    <>
      <Helmet>
        <title>Giffy</title>
        <meta name="description" content="Giffy APP" />
      </Helmet>
      <span className='start' onClick={goList}>Start!</span>
    </>
  )
}

export default Home 