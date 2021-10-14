import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Theme } from '../../app-c/theme';

interface ButtonProps {
    label: string,
    rounded?: boolean,
    variant?: 'outline' | 'filled',
    onClick?: MouseEventHandler<HTMLButtonElement>//( ev: MouseEvent ) => void
}

const StyledButton = styled.button<ButtonProps>`
    ${ props => {
        switch(props.variant) {
            case 'filled':
                return `color: ${ (props.theme as Theme).highlightCounterColor };
                    background-color: ${ (props.theme as Theme).highlightColor };
                    border: 1px solid ${ (props.theme as Theme).forthColor };
                    
                    &:hover{
                        background-color: ${ (props.theme as Theme).highlightCounterColor };
                        color: ${ (props.theme as Theme).highlightColor };
                    }
                    `
            default:
                return `color: ${ (props.theme as Theme).forthColor };
                    background-color: ${ (props.theme as Theme).secondaryColor };
                    border: 1px solid ${ (props.theme as Theme).forthColor };
                    
                    &:hover{
                        background-color: ${ (props.theme as Theme).forthColor };
                        color: ${ (props.theme as Theme).secondaryColor };
                    }`
        }
    } }

    ${ props => props.rounded ? `border-radius: 15px;` : '' }

    padding: 5px 15px;
    font-size: 12px;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Button: React.FC<ButtonProps> = ( props ) => {
    return <StyledButton { ...props }> { props.label } </StyledButton>
}