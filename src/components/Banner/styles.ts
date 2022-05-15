import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        border-bottom: 1px solid ${theme.colors.subtitleColor};
    `}
`
export const Container = styled.div`
    ${({ theme }) => css`
        margin: 0 auto;
        display: grid;
        grid-template-columns: auto 1fr;
        max-width: calc(${theme.grid.container} + 16.3rem);
    `}
`
export const Asside = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        max-width: 28rem;
        padding: 4rem 3rem;
        border-right: 1px solid ${theme.colors.subtitleColor};
    `}
`
export const WrapperAsside = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 3rem;

        & + div {
            margin-top: 7rem;
        }

        h1 {
            font-weight: 600;
            font-size: ${theme.font.sizes.huge};
            line-height: 6.1rem;
            color: ${theme.colors.textColor};
        }

        span {
            font-weight: 600;
            font-size: ${theme.font.sizes.medium};
            line-height: 2.4rem;
            color: ${theme.colors.subtitleColor};
        }
    `}
`
export const BannerArtists = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
`
export const DescriptionBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10rem;
    padding: 8rem 6rem;
`
export const WrapperDescription = styled.div`
    ${({ theme }) => css`
        max-width: 45rem;
        color: ${theme.colors.textColor};
        font-weight: 400;
        font-size: ${theme.font.sizes.xsmall};

        p {
            line-height: 2.2rem;
            margin-bottom: ${theme.spacings.xxlarge};
        }

        a {
            line-height: 2.2rem;
            color: ${theme.colors.textColor};
            text-decoration-line: underline;
        }

        span {
            color: ${theme.colors.colorLogo};
        }
    `}
`
export const ImageBanner = styled.div`
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
    }
`
