
import { Link } from "wouter"

function Gif ({gif}) {
  return (
    <>
      <Link to={`/gifs/${gif.id}`}>
        <img decoding="async" loading='lazy' src={gif.url} alt='loading' />
      </Link>
    </>
  )
}

export default Gif