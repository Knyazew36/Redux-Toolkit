import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {

  const { isLoading, error, user } = useSelector(state => state.user)

  return (
    <div><h1>User</h1></div>
  )
}

export default User