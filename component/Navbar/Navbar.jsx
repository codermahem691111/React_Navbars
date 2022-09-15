import React from 'react'
import Icon1 from './Images/Icon1.svg'
import {Nav, NavLink, NavMenu,NavBtn,NavBtnLinks, Bars } from './NavbarEl'
const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <img src={Icon1}></img>
      </NavLink>
      <Bars/>      
      <NavMenu>
       <NavLink to="/Home" activeStyle>
         Home 
       </NavLink>
       <NavLink to="/About Us" activeStyle>
         About US
       </NavLink>
       <NavLink to="/Courses" activeStyle>
         Courses
       </NavLink>
       <NavLink to="/library" activeStyle>
         Library
       </NavLink>
       <NavLink to="/Contact" activeStyle>
         Contact
       </NavLink>
       <NavLink to="/Login" ativeStyle>
         Login 
       </NavLink>  
       <NavBtn>
         <NavBtnLinks to="/Sign-in">
            Join Community
         </NavBtnLinks>
       
       </NavBtn>
      </NavMenu>    
    
    </Nav>
  )
}

export default Navbar
