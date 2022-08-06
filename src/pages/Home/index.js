import { useLocation } from 'wouter'

const Home = () => {

  const pushLocation = useLocation()[1]

  const goList = () => {
    pushLocation('/gifts')
  }

  return (
    <span className='start' onClick={goList}>Start!</span>
  )
}

export default Home