import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import {StyledContainer} from './header'
import Nour from "../videos/nour.mp4"

const StyledBanner = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100vw;
`
const About = () => (
 <StyledBanner>
 <video
    muted
    autoPlay
    loop
  >
    <source
      src={Nour}
      type="video/mp4"
    />
  </video>

 </StyledBanner>
)


export default About
