import styled from "styled-components";
import { HorizontalFlexView, VerticalFlexView } from "../Flex-view/FlexView.styles";

type StyledListItemProps = {
    active?: boolean
}

export const StyledListView = styled(VerticalFlexView)`
    overflow-y: auto;
    align-items: stretch;
    justify-content: stretch;
    padding: 5px;
`;

export const StyledListItem = styled(HorizontalFlexView)<StyledListItemProps>`
    margin: 10px 5px 5px 5px;
    padding: 8px;
    border: 1px solid ${ props => props.active ? props.theme.highlightColor : props.theme.primaryColor };
`;

export const StyledListItemContent = styled(VerticalFlexView)`
    flex-grow: 2;
`;