import React, { PropsWithChildren } from 'react';
import { HorizontalFlexView } from '../Flex-view/FlexView.styles';
import { StyledCardContainer, StyledCardDesc, StyledCardTitle } from './CardView.styles';
import { CardViewProps } from './CardView.types';

export const CardView: React.FC<PropsWithChildren<CardViewProps>> = ( props ) => {
    return <StyledCardContainer {...props}>
        <StyledCardTitle>{ props.title }</StyledCardTitle>
        <StyledCardDesc>{ props.desc }</StyledCardDesc>
        {
            props.children ? <HorizontalFlexView justifyContent="flex-end"> { props.children } </HorizontalFlexView> : ''
        }
    </StyledCardContainer>
}