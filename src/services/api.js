import { BASE_URL, API_KEY } from "./settings"

const searchURL = (search, limit, page) => {
  return `${BASE_URL}/gifs/search?api_key=${API_KEY}&q=${search}&limit=${limit}&offset=${page*limit}&rating=g&lang=en`
}

const oneGifURL = (id) => {
  return `${BASE_URL}/content/${id}?api_key=${API_KEY}`
}

export const searchGif = ({search, limit = 25, page = 0}) => {
  return fetch(searchURL(search, limit, page))
  .then(res => res.json())
  .then(({data}) => {
    return data.map(image => {
      return {
        url: image.images.downsized_medium.url,
        title: image.title,
        id: image.id
      }
    })
  })
}

export const getGif = (id) => {
  return fetch(oneGifURL(id))
  .then(res => res.json())
  .then(({data}) => {
    return {
      url: data.images.downsized_medium.url,
      title: data.title,
      id: data.id
    }
  })
} 