import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => css`
        max-width: ${theme.grid.container};
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${theme.spacings.small};
    `}
`
export const Artists = styled.div`
    ${({ theme }) => css`
        max-width: 43rem;
        p {
            font-weight: 400;
            font-size: ${theme.font.sizes.xsmall};
            line-height: 2.2rem;
            color: ${theme.colors.textColor};
            font-family: ${theme.font.family};
            margin-bottom: ${theme.spacings.xsmall};
        }
    `}
`
export const GroupArtists = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        padding: 6rem 0;
        cursor: pointer;

        img {
            position: absolute;
            width: 9rem;
            height: 9rem;
            overflow: hidden;
        }
        .artist-1 {
            left: 105px;
            transition: all 0.3s ease;
            &:hover {
                z-index: 2;
                left: 130px;
            }
        }
        .artist-2 {
            left: 70px;
            transition: all 0.3s ease;
            &:hover {
                z-index: 2;
                left: 95px;
            }
        }
        .artist-3 {
            left: 35px;
            transition: all 0.3s ease;
            &:hover {
                z-index: 2;
                left: 60px;
            }
        }
        .artist-4 {
            left: 0;
        }
    `}
`
export const TextArtists = styled.div`
    ${({ theme }) => css`
        position: absolute;
        right: 3.5rem;

        P {
            margin-bottom: 0px;
        }
    `}
`
export const Title = styled.div`
    ${({ theme }) => css`
        h1 {
            font-weight: 700;
            font-size: ${theme.font.sizes.huge};
            line-height: 6.1rem;
            color: ${theme.colors.textColor};

            span {
                color: ${theme.colors.colorLogo};
            }
        }
    `}
`
export const Logo = styled.div`
    ${({ theme }) => css``}
`
