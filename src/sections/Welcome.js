import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"
import Button from "../components/Button"
import ParticlesBackground from "../components/ParticlesBackground"

function Welcome() {
  const ParticlesContainer = styled.div`
    width: 100vw;
    height: 90vh;
    position: relative;
    display: flex;
    justify-content: center;
  `
  const WelcomeContainer = styled.div`
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: transparent;

    top: 20%;

    & > h1 {
      text-align: center;
      margin-bottom: 5vh;
      font-size: calc(2.8rem + 1vw);
    }
  `
  return (
    <ParticlesContainer>
      <WelcomeContainer>
        <h1>CodeProjects @ GISNY </h1>
        <Button>Activities</Button>
      </WelcomeContainer>
      <ParticlesBackground />
    </ParticlesContainer>
  )
}

export default Welcome
