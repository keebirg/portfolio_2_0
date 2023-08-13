import React from 'react';
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import Icon from "../../../components/Icon";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Icon width={"100"} height={"100"} viewBox={"0 0 100 100"} id={"figma"}/>
                    <Icon width={"100"} height={"100"} viewBox={"0 0 100 100"} id={"html"}/>
                    <Icon width={"100"} height={"100"} viewBox={"0 0 100 100"} id={"css"}/>
                    <Icon width={"100"} height={"100"} viewBox={"0 0 100 100"} id={"sass"}/>
                    <Icon width={"100"} height={"100"} viewBox={"0 0 100 100"} id={"react"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: black;
  padding: 50px 0;
`
