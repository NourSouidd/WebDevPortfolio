import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import logoNS from "../images/logo-ns.png"


const StyledHeader = styled.div`
  height: 80px;
  width: 100vw;
  position: fixed;
  background-color: #F8F5F3;
  top: 0px;
  right: 0px;
  font-family: "Cairo";
  z-index: 10;
`
export const StyledContainer = styled.div`
  width: 1640px;
  min-width: 1640px;
  margin: 0 auto;
  @media (max-width: 1440px) {
      width: 1280px;
      min-width: 1280px;
  }
  @media (max-width: 1280px) {
      width: 976px;
      min-width: 976px;
  }
  @media (max-width: 976px) {
      width: 768px;
      min-width: 768px;
  }
`

const StyledInnerHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  & img {
    margin-bottom: 0;
    width: 64%;
  }

  & a {
      margin: 0 20px;
      text-decoration: none;
      font-size: 18px;
      color: #000;
    }
`
const Header = () => (
 <StyledHeader>
   <StyledContainer>
     <StyledInnerHeader>
          <Link to="/">WORK</Link>
          <Link to="/"><img src={logoNS} alt={logoNS}/></Link>
          <Link to="/">CONTACT</Link>
      </StyledInnerHeader>
   </StyledContainer>
 </StyledHeader>
)


export default Header
