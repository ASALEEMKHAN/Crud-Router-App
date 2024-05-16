import React from 'react'
import Base from '../Base/Base'
import { useNavigate } from 'react-router-dom'

function NoPage() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>404 Error No Content</h1>
        <button onClick={()=>navigate("/")}>Home</button>
    </div>
  )
}

export default NoPage;