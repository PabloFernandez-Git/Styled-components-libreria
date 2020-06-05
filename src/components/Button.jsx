
import styled from 'styled-components'

const Button = styled.button`
    padding: .5rem .8rem;
    border: none;
    outline: none;
    background-color: ${({ bgcolor }) => bgcolor};
    color: #fff; 
`

export default Button;


/*
Estilos dinámicos con props

Nos permite reutilizar el codigo para generar dos botones iguales pero con diferente color (u otra propiedad):

Usando props y extrayendo esa propiedad:
background-color: ${(props) => props.bgcolor};

Usando props y destructurando:
background-color: ${({ bgcolor }) => bgcolor};



*/