import styled from "styled-components";

type FlexWrapperPropsType = {
    justify?: string,
    align?: string,
    wrap?: string,
    direction?: string,

}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  height: 100%;
`

