import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import Icon from "../../../components/Icon";

export const Fiture = () => {
    return (
        <StyledFiture>
            <Container>
                <Grade>
                    <span>4</span>
                    <span>+</span>
                </Grade>

                <Title>
                    <h3>
                        Developer and Designer, specialized in
                        UI/UX and Web Developer
                    </h3>
                </Title>

                <Years>
                    <h3>
                        Years
                        Experience
                        Working
                    </h3>
                </Years>

                <Box>
                    <Icon
                        width={"22"}
                        height={"23"}
                        viewBox={"0 0 22 23"}
                        id={"computer"}/>
                    <span>Front End Developer</span>
                </Box>

                <Box>
                    <Icon
                        width={"29"}
                        height={"30"}
                        viewBox={"0 0 29 30"}
                        id={"paint"}/>
                    <span>UI/UX Designer</span>
                </Box>

                <Box>
                    <Icon
                        width={"23"}
                        height={"28"}
                        viewBox={"0 0 22 28"}
                        id={"thunder"}/>
                    <span>Branding Designer</span>
                </Box>


            </Container>
        </StyledFiture>
    );
};

const StyledFiture = styled.section`

  background-color: #222A36;
  padding: 100px 0;

  ${Container} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

`
const Grade = styled.div`
  grid-column: 1;
  grid-row: 1;

  width: 133px;

  color: var(--pp-1-purple, #676CDB);
  font-family: Playfair Display;
  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 120px */
  position: relative;


  span {
    position: absolute;
    bottom: -25px;
    
    &+span{
      position: absolute;
      left: 63px;
      bottom: -8px;
    }
  }
`
const Title = styled.div`
  grid-column: 2/5;
  grid-row: 1;

  width: 800px;
  margin: 0 auto;

  color: #FFF;
  text-align: center;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 180%; /* 72px */

`
const Years = styled.div`
  grid-column: 1;
  grid-row: 2/3;

  width: 207px;
  height: 216px;
  color: #FFF;
  font-family: Playfair Display;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 180%; /* 72px */

`
const Box = styled.div`
  width: 288px;
  height: 295px;
  background-color: #C4C4C4;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 30px;
  padding-bottom: 35px;

  color: var(--blue-old, #222A36);

  span {
    margin-top: 10px;
  }

  & + & {
    margin-left: 15px;
  }
`


