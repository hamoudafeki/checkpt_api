import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
const UserCard = ({user}) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.username}</h3>
      <p>{user.id}</p>
      <Link to={`/info/${user.id}`}>
      <Button  variant="outline-warning">info</Button>{' '}
      </Link>

      <hr/>
      <hr/>
    </div>
  )
}

export default UserCard