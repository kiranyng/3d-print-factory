import styled from "styled-components";

export type FlexProps = {
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch',
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch',
    rounded?: boolean
}

export const HorizontalFlexView = styled.div<FlexProps>`
    display: flex;
    flex-direction: row;
    justify-content: ${ props => props.justifyContent ? props.justifyContent : 'flex-start' };
    align-items: ${ props => props.alignItems ? props.alignItems : 'flex-start' };

    border-radius: ${ props => props.rounded ? '5px' : 'none' };
`;

export const VerticalFlexView = styled.div<FlexProps>`
    display: flex;
    flex-direction: column;
    justify-content: ${ props => props.justifyContent ? props.justifyContent : 'flex-start' };
    align-items: ${ props => props.alignItems ? props.alignItems : 'flex-start' };
`