import styled from "styled-components";
import { Theme } from "../../app-c/theme";
import { HorizontalFlexView } from "../Flex-view/FlexView.styles";

export const StyledTabView = styled.div`
    margin: 10px 0;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const StyledTab = styled.div`
    border: 1px solid ${ props => (props.theme as Theme).tertiaryColor };
    color: ${ props => (props.theme as Theme).forthColor };
    background-color: ${ props => (props.theme as Theme).primaryColor };
    padding: 5px;
`;

export const StyledTabsList = styled(HorizontalFlexView)`
    border-bottom: 1px solid ${ props => (props.theme as Theme).tertiaryColor };
`

export const StyledTabUI = styled.div`
    width: 100%;
    background-color: ${ props => (props.theme as Theme).secondaryColor };
`;