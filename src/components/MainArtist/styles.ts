import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => css`
        max-width: ${theme.grid.container};
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;

        @media screen and (max-width: 770px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        @media screen and (max-width: 500px) {
            margin-bottom: -5rem;
        }
        @media screen and (max-width: 500px) and (max-height: 736px) {
            margin-bottom: -7rem;
        }
        @media screen and (max-height: 568px) {
            margin-bottom: 0px;
        }
    `}
`
export const Artists = styled.div`
    ${({ theme }) => css`
        p {
            font-weight: 400;
            font-size: ${theme.font.sizes.xsmall};
            line-height: ${theme.font.line.xsmall};
            color: ${theme.colors.textColor};
            font-family: ${theme.font.family};
            margin-bottom: ${theme.spacings.xsmall};
        }

        @media screen and (max-width: 700px) {
            width: 30rem;
            p {
                width: 30rem;
                margin: 0px;
            }
        }
        @media screen and (max-height: 568px) {
            margin-bottom: -6rem;

            p {
                margin-bottom: -2rem;
            }
        }
    `}
`
export const GroupArtists = styled.div`
    ${({ theme }) => css`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6rem 0;
        cursor: pointer;

        img {
            position: absolute;
            max-width: 9rem;
            max-height: 9rem;
            overflow: hidden;
        }
        .artist-1 {
            left: 110px;
            transition: all 0.3s ease;
            &:hover {
                z-index: 2;
                left: 130px;
            }
        }
        .artist-2 {
            left: 75px;
            transition: all 0.3s ease;
            &:hover {
                z-index: 2;
                left: 95px;
            }
        }
        .artist-3 {
            left: 40px;
            transition: all 0.3s ease;
            &:hover {
                z-index: 2;
                left: 60px;
            }
        }
        .artist-4 {
            left: 0;
        }

        @media screen and (max-width: 770px) {
            margin-bottom: 4rem;
            .artist-1 {
                left: 18rem;
                &:hover {
                    left: 18rem;
                }
            }
            .artist-2 {
                left: 12rem;
                &:hover {
                    left: 12rem;
                }
            }
            .artist-3 {
                left: 6rem;
                &:hover {
                    left: 6rem;
                }
            }
            .artist-4 {
                left: 0;
            }
        }

        @media screen and (max-width: 500px) {
            img {
                max-width: 6rem;
                max-height: 6rem;
            }
        }
        @media screen and (max-width: 320px) {
            img {
                max-width: 4rem;
                max-height: 4rem;
            }
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

        @media screen and (max-width: 770px) {
            bottom: -4rem;
            left: 0;
            p {
                margin: 0px;
            }
        }
        @media screen and (max-width: 500px) {
            bottom: -2rem;
        }
        @media screen and (max-height: 568px) {
            display: none;
        }
    `}
`
export const Title = styled.div`
    ${({ theme }) => css`
        h1 {
            font-weight: 700;
            font-size: ${theme.font.sizes.huge};
            line-height: ${theme.font.line.huge};
            color: ${theme.colors.textColor};

            span {
                color: ${theme.colors.colorLogo};
            }
        }

        @media screen and (max-width: 770px) {
            margin: 2rem 0;
        }
    `}
`
export const Logo = styled.div`
    ${({ theme }) => css`
        @media screen and (max-width: 770px) {
            display: none;
        }
    `}
`
