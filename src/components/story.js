import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import styled from 'styled-components'
import {StyledContainer} from './header'
import AboutIMG from "../images/about-img.jpg"

const StyledStory = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100vw;
`
const StyledInnerStory = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  img {
    width: 30%;
    height: 50%;
  }
  div {
    width: 40%;
    font-weight: 200;
    font-size: 30px;
  }
`

const Story = () => (
  <Layout>
    <StyledStory>
      <StyledContainer>
          <StyledInnerStory>
          <div>
            <p>Hey I’m Nour, web developer currently located in Montreal.</p>
            <p>I’m currently enrolled in an IT progam and freelancing.</p>
            <p>Before talking about that let me take you some years back where everything started.</p>
          </div>
            <img src={AboutIMG} alt={AboutIMG}/>
          </StyledInnerStory>
      </StyledContainer>
    </StyledStory>
  </Layout>
)

export default Story
