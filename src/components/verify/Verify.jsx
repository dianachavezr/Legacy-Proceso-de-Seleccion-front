import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useQuery } from '../useQuery/useQuery'
import { PETITIONS } from '../../../requestUrl';

const Verify = () => {
  let query = useQuery();
  query = query.get("token");
  const [message, setMessage] = useState('')
  
  useEffect(() => {
    try {
      axios.get(`${PETITIONS.activateUser}${query}`).then(res => {
        setMessage(res.data.msg)
      })
    } catch (error) {
      setMessage(error.msg)
    }
  }, [query])

  return (
    <h1>{message}</h1>
  )
}

export default Verify