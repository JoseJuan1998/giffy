import { useLocation } from "wouter"
import Gift from "../../components/Gift"
import { useGlobalGifts } from '../../hooks/useGifts'

const Read = ({params: {id}}) => {
  const pushLocation = useLocation()[1]

  const gifts = useGlobalGifts()
  const gift = gifts.find(g => g.id === id)

  const goList = () => {
    pushLocation('/gifts')
  }

  return (
    <>
      { gift && <Gift gift={gift} /> }
      <span style={{cursor: 'pointer'}} onClick={goList} >{"< Back"}</span>
    </>
  )
}

export default Read