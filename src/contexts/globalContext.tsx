import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react'

type Props = {
  children: React.ReactNode
}

type ContextType = {
  isLight?: boolean
  setIsLight?: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextType>({
  isLight: false,
  setIsLight: undefined
})

const GlobalProvider = ({ children }: Props) => {
  const [isLight, setIsLight] = useState<boolean>(false)
  return (
    <GlobalContext.Provider
      value={{
        isLight,
        setIsLight
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

function useGlobalContext() {
  return useContext(GlobalContext)
}

export { GlobalContext, GlobalProvider, useGlobalContext }
