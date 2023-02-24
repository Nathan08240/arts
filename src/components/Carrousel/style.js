import styled from "styled-components";

export const CarrouselContainer = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  object-fit: contain;

  @media (max-width: 768px) {
    overflow: visible;
  }
`

export const Slide = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: relative;

`