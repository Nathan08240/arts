import React from 'react';
import {Arrow, Container} from "@/components/Link/style";
import arrow from "../../assets/icons/arrow_black.svg";

const Link = ({display, to}) => {
    return (
        <Container>
            <a href={to} target="_blank"
                rel="noreferrer">
                {display}
                <Arrow
                    src={arrow.src}
                    alt="arrow"
                    width={30}
                    height={30}
                />
            </a>
        </Container>
    )
}

export default Link;