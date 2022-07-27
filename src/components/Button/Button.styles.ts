import styled, { css } from 'styled-components';

export type ButtonVariant = "primary" | "secondary" | "danger" | "warning" | "success" | "info";

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    warning: 'yellow',
    success: 'green',
    info: 'blue',
}

const buttonTextVariants = {
    primary: 'white',
    secondary: 'white',
    danger: 'white',
    warning: 'black',
    success: 'white',
    info: 'white',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 50px;
    border-radius: 5px;
    border: 0;
    margin: 5px;

    background-color: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};
    /* ${props => {
        return css`
            background-color: ${buttonVariants[props.variant]};
            color: ${buttonTextVariants[props.variant]};
        `
    }} */
`;