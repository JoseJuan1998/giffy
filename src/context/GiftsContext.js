import { createContext, useState } from "react";

const Context = createContext({})

export function GiftsContextProvider({children}) {
  const [gifts, setGifts] = useState([])
  return <Context.Provider value={{gifts, setGifts}}>
    {children}
  </Context.Provider>
}

export default Context