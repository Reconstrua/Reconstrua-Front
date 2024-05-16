import React from "react"

import {Navigate} from "react-router-dom"

import {useContext} from "react"
import {AuthContext} from "../../contexts/AuthContext"

export function PrivateRoute({children}){
  const {isAuthenticated} = useContext(AuthContext)
  return isAuthenticated === true? children: <Navigate to="/"/>
}