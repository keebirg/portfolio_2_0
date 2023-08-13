import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenuHeader>
            <ul>
                <ListItem>
                    <Link href={"#"}>Home</Link>
                </ListItem>
                <ListItem>
                    <Link href={"#"}>About</Link>
                </ListItem>
                <ListItem>
                    <Link href={"#"}>Services</Link>
                </ListItem>
            </ul>

        </StyledMenuHeader>
    );
};

const StyledMenuHeader=styled.nav`
    ul{
      display: flex;
      gap: 30px;
    }
`
const ListItem=styled.li`
  
`
const Link=styled.a`
  
`
