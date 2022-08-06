
import { Link } from "wouter"

function Gift ({gift}) {
  return (
    <>
      {/* <h6>{gift.title}</h6> */}
      <Link to={`/gifts/${gift.id}`}>
        <img decoding="async" loading='lazy' src={gift.url} alt='loading' />
      </Link>
    </>
  )
}

export default Gift