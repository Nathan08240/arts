import styled from "styled-components";

export const Main = styled.div`
  display: grid;
  background :no-repeat center center fixed;
  background-size: cover;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 100vh;
  
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
      
    }
`

export const Actualite = styled.div`
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;

  & > div {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  
  @media (max-width: 768px) {
    grid-column: 1/2;
  }
`

export const Figurines = styled.div`
  grid-column: 2/3;
  display: flex;
    flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;

    & > h2 {
        color: #fff;
      height: 10%;
    }
  
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
      
  }

    @media (max-width: 768px) {
        grid-column: 1/2;
    }

`

export const Devis = styled.div`
  grid-column: 3/4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  
    @media (max-width: 768px) {
        grid-column: 1/2;
    }
`

export const Speech = styled.div`
  width: 80%;
  height: 50%;
  display: flex;

  & > p {
    margin: auto;
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.5;
    font-family: 'Roboto', sans-serif;
  }
  
`