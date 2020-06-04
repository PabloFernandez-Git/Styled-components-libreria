import React from 'react'
import styled from 'styled-components'


const getBorder = (width, type, color) => {
    return `${width} ${type} ${color}`
}

const StyledTitle = styled.h1`
    text-align: center;
    border: ${getBorder('3px', 'solid', 'royalblue')};
`

const Title = () => {
    return(
        <StyledTitle>Styled Components</StyledTitle>
    )
}

export default Title

/*
Estilos dinámicos con funciones




*/