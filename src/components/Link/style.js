import styled from "styled-components";
import Image from "next/image";



export const Container = styled.div`
  & > a {
    padding: 16px 48px 16px 28px;
    background: white;
    border-radius: 5px;
    display: inline-block;
    position: absolute;
    bottom: 20%;
    right: 45%;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.3s ease 0s;
    color: #000;
    font-family: 'Roboto', sans-serif;

    
    &:hover {
      background: #828181;
    }

  }


`

export const Arrow = styled(Image)`
  width: 30px;
  position: absolute !important;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`
