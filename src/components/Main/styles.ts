import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => css`
        position: absolute;
        bottom: 1px;
        left: 50%;
        transform: translateX(-50%);
        max-width: ${theme.grid.container};
        margin: 0 auto;
    `}
`
