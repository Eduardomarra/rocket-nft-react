import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => css`
        max-width: ${theme.grid.container};
        margin: 0 auto;
        padding: 0 0.8rem;

        h1 {
            font-weight: 700;
            font-size: ${theme.font.sizes.huge};
            line-height: ${theme.font.line.huge};
            color: ${theme.colors.textColor};
            margin: 16rem 0;

            span {
                color: ${theme.colors.colorLogo};
            }
        }
        @media screen and (max-width: 768px) {
            h1 {
                margin: 6rem 0;
            }
        }
        @media screen and (max-width: 500px) {
            h1 {
                margin: 3rem 0 2rem 0;
            }
        }
    `}
`
export const WrapperArtists = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        position: relative;

        & ::before {
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            content: '';
            display: block;
            width: 1px;
            height: 100%;
            background: ${theme.colors.subtitleColor};
        }
    `}
`
export const WrapperAstronaut = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    `}
`
export const Artists = styled.div`
    ${({ theme }) => css`
        margin-top: ${theme.spacings.xxlarge};

        @media screen and (max-width: 768px) {
            margin-top: ${theme.spacings.medium};
        }
        @media screen and (max-width: 500px) {
            margin-top: ${theme.spacings.small};
        }
    `}
`
export const Title = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
            font-weight: 500;
            font-size: ${theme.font.sizes.large};
            line-height: ${theme.font.line.large};
            color: #ffffff;
        }

        & svg {
            margin-left: ${theme.spacings.small};
            color: #ffffff;
            width: 3.6rem;
            height: 3.6rem;
        }

        @media screen and (max-width: 500px) {
            h2 {
                font-size: ${theme.font.sizes.medium};
                line-height: ${theme.font.line.medium};
            }

            & svg {
                margin-left: 0px;
                width: 2.5rem;
                height: 2.5rem;
            }
        }
        @media screen and (max-width: 500px) {
            h2 {
                font-size: ${theme.font.sizes.xsmall};
                line-height: ${theme.font.line.xsmall};
            }

            & svg {
                margin-left: 0px;
                width: 2rem;
                height: 2rem;
            }
        }
    `}
`
export const Description = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 2rem 0;
        font-size: ${theme.font.sizes.medium};
        line-height: ${theme.font.line.medium};

        h4 {
            font-weight: 600;
            color: ${theme.colors.subtitleColor};
        }

        span {
            font-weight: 400;
            color: ${theme.colors.colorLogo};
        }

        @media screen and (max-width: 500px) {
            font-size: ${theme.font.sizes.small};
            line-height: ${theme.font.line.small};
            span {
                font-size: 0.8rem;
            }
        }
        @media screen and (max-width: 320px) {
            font-size: 0.8rem;
            line-height: 0.8rem;
            span {
                font-size: 0.6rem;
            }
        }
    `}
`
export const ImageAstronaut = styled.div`
    ${({ theme }) => css`
        max-width: 35rem;
        height: 20rem;

        img {
            width: 100%;
            height: 100%;
        }

        @media screen and (max-width: 500px) {
            max-width: 15rem;
            height: 10rem;
        }

        @media screen and (max-width: 500px) {
            max-width: 12rem;
            height: 8rem;
        }
    `}
`
