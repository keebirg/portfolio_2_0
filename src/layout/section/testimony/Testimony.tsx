import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Icon from "../../../components/Icon";
import image from "../../../assets/images/testimony.webp"

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <FlexWrapper>
                    <Image src={image}/>
                    <Content1>
                        <span>"</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est
                            a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
                            ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                            Class aptent taciti sociosqu ad litora torquent </p>
                        <span>
                                <Icon width="30" height="26" viewBox="0 0 30 26" id={"arrow left"}/>
                                <Icon width="30" height="26" viewBox="0 0 30 26" id={"arrow right"}/>
                        </span>
                    </Content1>

                    <Content2>
                        <Text>Satisfaction Clients</Text>
                        <Number>100 %</Number>

                        <Text>Clients On Worldwide</Text>
                        <Number>+ 80</Number>

                        <Text>Projects Done</Text>
                        <Number>743</Number>
                    </Content2>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  background-color: rgba(34, 42, 54, 0.95);
  padding: 100px 0;

`

const Image = styled.img`
  width: 389px;
  height: 391px;
`



const Content1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  max-width: 490px;
  margin: 0 109px 0 15px;
  
  p{
    color: #FFF;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 180%; /* 36px */
  }
  
  span{
    color: #C4C4C4;
    font-family: Playfair Display;
    font-size: 100px;
    font-style: normal;
    font-weight: 700;

    height: 77px;
  }
  
`

const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Text = styled.span`
  color: #FFF;
  font-family: Playfair Display;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 36px */
`

const Number = styled.span`
  color: var(--pp-1-purple, #676CDB);
  font-family: Playfair Display;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 60px */
`