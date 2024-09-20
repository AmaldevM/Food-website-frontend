import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const AuthUser = () => {


    const {isUserExist} = useSelector((state) => state.user) 

    const navigate = useNavigate() 

    if (!isUserExist) {
        navigate('/login')
    }

  return (
    isUserExist ? <Outlet/> : null
  )
}

export default AuthUser
