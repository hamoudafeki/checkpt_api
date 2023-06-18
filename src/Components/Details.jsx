import React from 'react'
import { useState , useEffect} from 'react';
import axios from 'axios';
import {useParams, Link} from "react-router-dom"
import { Spinner } from 'react-bootstrap';

const Details = () => {
  const [list, setList ] = useState(null);
  const [loading, setLoading] = useState(true);
  const {id}=useParams()
  const getUsers=async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
setList(res.data.find(el=>el.id==id))
setLoading(false)
  }
  useEffect(() => {
    getUsers()
  }, []);
  return (
    <div>
{
  loading? <>
  Please Wait
  <Spinner  animation="border" size="sm" />
  <Spinner animation="border" />
  <Spinner animation="grow" size="sm" />
  <Spinner animation="grow" /> </> : list&&<>
<h1>{list.name}</h1>
<h3>{list.email}</h3>
</> 
} 
<Link to="/"> <button className='btn btn-outline-warning btnh '>Home</button> </Link> 
</div>
  )
};

export default Details;