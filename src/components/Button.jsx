import styled from 'styled-components'

const Button = styled.button`
    padding: .5rem .8rem;
    border: none;
    outline: none;
    background-color: ${({ danger }) => danger ? 'red' : 'royalblue'};
    color: #fff; 
`

export default Button;


/*
Estilos dinámicos con operador ternario

Podemos dar un color por defecto en caso que no llegue la prop usando || :

background-color: ${({ bgcolor }) => bgcolor || 'purple'};


Podemos dar estilos usando un operador ternario en base a un booleano:

background-color: ${({ danger }) => danger ? 'red' : 'royalblue'};

Usando esta condicion los botones con el atributo ‘danger’ se le aplicara el color ‘red’ y los que no la posean se les aplicara el color ‘royalblue’.


*/