import React from 'react'
import UserCard from './UserCard'
import { Spinner } from 'react-bootstrap'

const UserList = ({list,loading}) => {
  return (
    <div>
      {
        loading? 
        <>
        Please Wait
        <Spinner  animation="border" size="sm" />
        <Spinner animation="border" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
      </>
   : list&&
  React.Children.toArray(list.map(el=> <UserCard user={el}/>))
      }
    </div>
  )
}

export default UserList