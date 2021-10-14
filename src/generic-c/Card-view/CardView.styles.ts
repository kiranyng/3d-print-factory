import styled from "styled-components";
import { Theme } from "../../app-c/theme";
import { CardViewProps } from "./CardView.types";

export const StyledCardContainer = styled.div<CardViewProps>`
    background-color: ${ props => (props.theme as Theme).secondaryColor };
    ${ props => props.img ? `background-image: url(${props.img})` : ''};

    ${ props => props.height ? `height: ${props.height}px;` : '' }

    display: flex;
    flex-direction: column;

    flex-grow: 2;

    padding: 5px;
    background-size: cover;

    ${ props => props.rounded ? 'border-radius: 5px;' : '' }

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const StyledCardTitle = styled.div`
    color:  ${ props => (props.theme as Theme).forthColor };

    font-size: 1.2em;
    font-weight: bold;
`;

export const StyledCardDesc = styled.div`
    color:  ${ props => (props.theme as Theme).tertiaryColor };
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    flex-grow: 2;
`;