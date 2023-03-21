import styled from "styled-components";

export const CarrouselContainer = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  object-fit: contain;

  .visible {
    @media (max-width: 768px) {
      display: none;
    }
  }

  .hidden {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }
  
  @media (max-width: 768px) {
    overflow: hidden;
  }
`

export const SpeechContainer = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
  padding: 0 2rem;
  overflow: hidden;
  object-fit: contain;
  gap: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`

export const Speech = styled.div`
  & > p {
    margin: auto;
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.5;
    font-family: 'Roboto', sans-serif;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

`

export const Slide = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: relative;

`