import { createContext, useState } from "react";

export const ToggleModalContext = createContext();

export const ToggleModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const [id, setId] = useState("")

  const toggleModal = () => {

    setIsOpen(!isOpen)
  }

  return (
    <ToggleModalContext.Provider value={{ isOpen, toggleModal, setId, id }}>
      {children}
    </ToggleModalContext.Provider>
  )
}