import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import photo from "../../../assets/images/my_photo.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <Content>
                    <Name>Hello! <br/> I am  Mihail Ilin </Name>
                    <MainTitle>
                        I’am freelance web developer based in Indonesia who loves to craft attractive design experiences
                        for the web.
                    </MainTitle>
                    <ul>
                        <ListItem>
                            <Link href={"#"}>Email me</Link>
                        </ListItem>
                        <ListItem>
                            <Link href={"#"}>Download CV</Link>
                        </ListItem>
                    </ul>
                </Content>
            </Container>
            <PhotoWrapper>
                <Photo src={photo}/>
            </PhotoWrapper>

        </StyledMain>
    );
};


const StyledMain = styled.section`
  background: var(--blue, rgba(34, 42, 54, 0.95));
  height: 100vh;
  position: relative;
  z-index: -2;
  
  ${Container}{
    display: flex;
    align-items: center;
  }
`

const PhotoWrapper = styled.div`
  position: absolute;
  z-index: -1;
  right: 0;
  top: 0;
`

const Content = styled.div`
  width: 735px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ul {
    display: flex;
    gap: 30px;
  }
`

const Photo = styled.img`
  width: 50vw;
  height: 100vh;
 

`

const Name = styled.h2`
  font-family: Playfair Display, sans-serif;
  font-size: 90px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 108px */




`

const MainTitle = styled.h1`
  width: 404px;
`

const ListItem = styled.li`
`

const Link = styled.a`
  display: inline-flex;
  padding: 20px 40px;
  align-items: center;
  gap: 10px;
`

