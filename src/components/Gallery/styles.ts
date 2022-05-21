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

        @media screen and (max-width: 770px) {
            .gallery-two {
                display: none;
            }
        }
        @media screen and (max-height: 625px) {
            .gallery-two {
                display: none;
            }
        }
        @media screen and (max-height: 624px) {
            display: none;
        }
    `}
`
export const Row = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;

        & + div {
            margin-top: 1rem;
        }

        @media screen and (max-width: 770px) {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
    `}
`

export const WrapperImage = styled.div`
    width: 30rem;
    height: 20rem;

    img {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 700px) {
        width: 25rem;
        height: 15rem;
    }
    @media screen and (max-width: 500px) {
        width: 15rem;
        height: 8rem;
    }
`
