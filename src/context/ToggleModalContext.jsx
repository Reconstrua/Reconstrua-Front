import { createContext, useState } from "react";
// import { getDataById } from "../utils/apiFunctions"



export const ToggleModalContext = createContext();

export const ToggleModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState([])

  const toggleModal = (dataType, dataId) => {
      // getDataById(dataType,dataId,setData);
    setIsOpen(!isOpen)
  }

  return (
    <ToggleModalContext.Provider value={{ isOpen, toggleModal, data }}>
      {children}
    </ToggleModalContext.Provider>
  )
}