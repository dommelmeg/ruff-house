import React, { useState, createContext } from "react";

const RuffHouseContext = createContext({})

const RuffHouseProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  return (
    <RuffHouseContext.Provider
      value={{ 
        user, setUser,
      }} 
    >
      {children}
    </RuffHouseContext.Provider>
  )
}

export { RuffHouseContext, RuffHouseProvider }