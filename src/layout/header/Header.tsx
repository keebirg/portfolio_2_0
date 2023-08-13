import React from 'react';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "./Logo";
import {Menu} from "./Menu";
import {Button} from "./Button";
import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Logo/>
                    <Menu/>
                    <Button/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader=styled.header`
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999999;
  
`



