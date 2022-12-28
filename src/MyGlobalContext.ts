import { createContext, useContext } from "react"
export type GlobalContent = {
  userIdd: string
  setUserIdd:(c: string) => void
//   email:string
//   setEmail: (c: string) => void
}

export const MyGlobalContext = createContext<GlobalContent>({
userIdd: 'Hello World',
setUserIdd: () => {},
// email: 'sample@gmail.com',
// setEmail: () => {},
})

export const useGlobalContext = () => useContext(MyGlobalContext)