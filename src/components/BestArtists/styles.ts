import styled, { css } from 'styled-components'
import { CardArtistStyle } from '.'

export const Container = styled.div`
    ${({ theme }) => css`
        max-width: ${theme.grid.container};
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `}
`
export const Title = styled.h1`
    ${({ theme }) => css`
        font-weight: 700;
        font-size: ${theme.font.sizes.huge};
        color: ${theme.colors.textColor};
        line-height: 6.1rem;
        padding: 15rem 0 12rem 0;

        span {
            color: ${theme.colors.colorLogo};
        }

        @media screen and (max-width: 768px) {
            padding: 5rem 0 4rem 0;
        }
        @media screen and (max-width: 500px) {
            padding: 3rem 0 2rem 0;
        }
    `}
`
export const WrapperArtists = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 11rem;
    width: 100%;

    @media screen and (max-width: 768px) {
        gap: 3rem;
        justify-content: center;
    }
    @media screen and (max-width: 500px) {
        gap: 1rem;
    }
`

type CardProps = {
    cardStyle?: CardArtistStyle
}

export const Artist = styled.div<CardProps>`
    ${({ theme, cardStyle }) => css`
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: ${theme.colors.cardColor};
        padding: 2.5rem 3rem;

        ${cardStyle &&
        css`
            background: ${theme.colors.colorLogo};
            color: ${theme.colors.textColor};

            ${Description} {
                span {
                    color: ${theme.colors.textColor};
                }
            }
        `}

        img {
            width: 10rem;
            height: 10rem;
        }

        @media screen and (max-width: 768px) {
            padding: 2rem 2.5rem;
        }
        @media screen and (max-width: 500px) {
            padding: 1.5rem 2rem;
        }
    `}
`
export const Description = styled.div`
    ${({ theme }) => css`
        padding-left: 2rem;
        font-size: ${theme.font.sizes.medium};
        line-height: 2.4rem;
        font-weight: 500;

        h3 {
            color: ${theme.colors.textColor};
            margin-bottom: 1rem;
        }

        span {
            color: ${theme.colors.colorLogo};
        }
    `}
`
export const SubTitulo = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 6rem 0 16rem 0;

        span {
            font-weight: 400;
            font-size: ${theme.font.sizes.medium};
            line-height: 2.4rem;
            color: ${theme.colors.textColor};
        }

        svg {
            color: ${theme.colors.colorLogo};
            margin-left: 2rem;
            width: 3rem;
            height: 3rem;
        }

        @media screen and (max-width: 768px) {
            margin: 2rem 0 5rem 0;
        }
        @media screen and (max-width: 500px) {
            margin: 2rem 0 3rem 0;
        }
    `}
`
