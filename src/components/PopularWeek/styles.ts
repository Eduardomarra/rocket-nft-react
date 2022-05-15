import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => css`
        max-width: ${theme.grid.container};
        margin: 0 auto;

        h1 {
            font-weight: 700;
            font-size: ${theme.font.sizes.huge};
            line-height: 6.1rem;
            color: ${theme.colors.textColor};
            margin: 16rem 0;

            span {
                color: ${theme.colors.colorLogo};
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
            line-height: 37px;
            color: #ffffff;
        }

        & svg {
            margin-left: ${theme.spacings.small};
            color: #ffffff;
            width: 3.6rem;
            height: 3.6rem;
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
        line-height: 2.4rem;

        h4 {
            font-weight: 600;
            color: ${theme.colors.subtitleColor};
        }

        span {
            font-weight: 400;
            color: ${theme.colors.colorLogo};
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
    `}
`
