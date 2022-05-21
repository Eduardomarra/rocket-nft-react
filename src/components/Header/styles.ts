import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => css`
        max-width: ${theme.grid.container};
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: ${theme.spacings.medium} 0.8rem;

        @media screen and (max-width: 700px) {
            flex-direction: column;
            padding: ${theme.spacings.xsmall} 0.8rem;
        }
    `}
`
export const Logo = styled.div`
    ${({ theme }) => css`
        h1 {
            font-weight: 700;
            font-size: ${theme.font.sizes.xlarge};
            line-height: 4.9rem;
            color: ${theme.colors.textColor};

            & span {
                color: ${theme.colors.colorLogo};
            }
        }
    `}
`
export const Nav = styled.ul`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${theme.spacings.large};

        & a {
            font-weight: 400;
            font-size: ${theme.font.sizes.xsmall};
            line-height: 2.2rem;
            color: ${theme.colors.textColor};
            transition: all 0.3s ease;

            &:hover {
                color: ${theme.colors.colorLogo};
            }
        }
    `}
`
export const Button = styled.button`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        max-width: 25rem;
        height: 5rem;
        background-color: #fff;
        padding: 0 2rem;
        border-radius: 2px;
        transition: all 0.3s ease;
        @media screen and (max-width: 700px) {
            margin-top: ${theme.spacings.xsmall};
        }

        &:hover {
            filter: brightness(0.8);
            & img {
                transform: scale(1.1);
            }
        }

        & img {
            width: 3rem;
            height: 3rem;
            transition: all 0.3s ease;
        }

        & span {
            font-weight: 700;
            font-size: ${theme.font.sizes.small};
            line-height: 2rem;
            color: #000000;
            padding-left: 1rem;
        }
    `}
`
