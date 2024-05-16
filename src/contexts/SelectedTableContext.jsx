import { createContext, useState } from "react"

export const SelectedTableContext = createContext();

export const SelectedTableProvider = ({ children }) => {
  const [selectedTable, setSelectedTable] = useState("")

  return (
    <SelectedTableContext.Provider value={{selectedTable, setSelectedTable}}>
      {children}
    </SelectedTableContext.Provider>
  )
}