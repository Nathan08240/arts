import styled from "styled-components";

export const Speech = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  max-width: 800px;
  text-align: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.5;

  & > p {
    margin: auto;
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.5;
    font-family: 'Roboto', sans-serif;
  }

`