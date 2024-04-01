import { useAccordion } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Login from '../pages/Login'

export default function PrivateRoute({children}) {
    const {auth} = useSelector((state)=>state.userReducer)
 
        if (auth) {
            return children
        } 
  return <Login/>
}
