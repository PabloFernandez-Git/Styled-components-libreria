import styled, { css } from 'styled-components'

const Button = styled.button`
    padding: .5rem .8rem;
    border:none;
    outline:none;
    margin-right:1rem;
    margin-bottom:1rem;
    color:#fff;
    background-color: ${({ theme }) => theme.primary};
    transition: color, background-color 1s;

    &:hover{
        color: #fff;
        background-color: blue;
    }

    ${({ danger, ghost }) => danger && ghost && css`
        background-color: transparent;
        color: ${({ theme }) => theme.danger};
        border: 1px solid ${({ theme }) => theme.danger};
    `}
        
    ${({ danger, ghost }) => danger && !ghost && css`
        background-color: ${({ theme }) => theme.danger};
    `}

    ${({ danger, ghost }) => !danger && ghost && css`
        background-color: transparent;
        color: ${({ theme }) => theme.primary};
        border:1px solid ${({ theme }) => theme.primary};
    `}
`

export default Button;


/*
Transiciones

Se realizan de la misma forma que en css tradicional.

transition: color, background-color 1s;

&:hover{
    color: #fff;
    background-color: blue;
}


*/