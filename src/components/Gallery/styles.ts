import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => css`
        max-width: ${theme.grid.container};
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        margin-top: 8rem;
    `}
`
export const Row = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;

        img {
            border: 1px solid white;
        }

        & + div {
            margin-top: 4rem;
        }
    `}
`
