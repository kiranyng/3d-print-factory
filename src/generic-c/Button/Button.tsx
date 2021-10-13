import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

interface ButtonProps {
    label: string,
    variant?: 'primary' | 'secondary' | 'small',
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const StyledButton = styled.button<ButtonProps>`
    color: ${ (props) => props.variant == 'primary' ? 'red' : 'blue' };
    padding: 5px 15px;
    border-radius: 15px;
    border: 1px solid ${ (props) => props.variant == 'primary' ? 'red' : 'blue' };
    font-size: 12px;
`;

export const Button: React.FC<ButtonProps> = ( props ) => {
    return <StyledButton { ...props }> { props.label } </StyledButton>
}