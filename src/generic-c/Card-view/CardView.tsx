import React, { Component, FunctionComponent, PropsWithChildren } from 'react';
import styled from 'styled-components';

type CardViewProps = {
    title: string,
    img?: string,
    desc?: string
}

const CardContainer = styled.div<CardViewProps>`
    background-color: #268989;
    ${ props => props.img ? `background-image: url(${props.img})` : ''};
  
    padding: 5px;
    background-size: cover;

    border-radius: 5px;
`;

const CardTitle = styled.div`
    color: burlywood;

    font-size: 1.2em;
    font-weight: bold;
`;

const CardDesc = styled.div`
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const CardActions = styled.div`
    display: flex;
    justify-content: space-evenly;

    padding: 5px 0 0;
`;

export const CardView: React.FC<PropsWithChildren<CardViewProps>> = ( props ) => {
    return <CardContainer {...props}>
        <CardTitle>{ props.title }</CardTitle>
        <CardDesc>{ props.desc }</CardDesc>
        {
            props.children ? <CardActions> { props.children } </CardActions> : ''
        }
    </CardContainer>
}