import styled, {css} from 'styled-components'

const Button = styled.button`
    padding: .5rem .8rem;
    border: none;
    outline: none;
    margin-right: 1rem;
    margin-bottom: 1rem;
    color: #fff;
    background-color: royalblue;

    ${({danger, ghost}) => danger && ghost && css`
        background-color: transparent;
        color: red;
        border: 1px solid red;
    `}

    ${({danger, ghost}) => danger && !ghost && css`
        background-color: red;   
    `}

    ${({danger, ghost}) => !danger && ghost && css`
        background-color: transparent;
        color: royalblue;
        border: 1px solid royalblue;
    `}

`

export default Button;


/*
Usando el módulo css (de 'styled-components')

Vamos a importar un modulo que nos da 'styled-components' que es {css}

import styled, {css} from 'styled-components'

Con esto nosotros podemos interpolar template strings que es lo que necesitamos hacer.
Al tener que usar mas de una propiedad necesitamos un template string para que se interpole con el template string que ya necesita el componente (styled.button) de por si.

Esta misma logica la podemos aplicar para todo tipo de botones u otros componentes (formularios, imagenes, parrafos, titulos) donde queremos tener un estilo por defecto y en funcion de algunas props que puedan cambiar sin tener que reescribir todo el componente. 

Esta es la forma de generar varios estilos en funcion de props e interpolando template string con el modulo de css.

*/