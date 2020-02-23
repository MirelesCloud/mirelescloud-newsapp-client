import * as React from 'react'
import { useState } from 'react'
import { Nav, NavHeader, NavLeft  } from './Styles'

const Header: React.FC = () => {
  
  return (
    <Nav>
      <NavHeader>
        <NavLeft>MirelesCloud News App</NavLeft>
      </NavHeader>
    </Nav>

  )
}

export default Header