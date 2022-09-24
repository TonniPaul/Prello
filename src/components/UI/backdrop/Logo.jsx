import React from 'react'
import logo from '../../../images/prello.png'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'>
      <img src={logo} alt="prellologo" className="logo"/>
    </Link>
  )
}

export default Logo