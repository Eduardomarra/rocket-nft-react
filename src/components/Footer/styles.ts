import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
    ${({ theme }) => css`
        width: 100%;
        background: ${theme.colors.cardColor};
        border-bottom: 1px solid ${theme.colors.subtitleColor};
    `}
`
export const Container = styled.div`
    ${({ theme }) => css`
        max-width: ${theme.grid.container};
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        flex-wrap: wrap;
    `}
`
export const WrapperLogo = styled.div`
    ${({ theme }) => css`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8rem 0 6rem 0;

        h1 {
            font-weight: 700;
            font-size: ${theme.font.sizes.xlarge};
            line-height: 4.9rem;
            color: ${theme.colors.textColor};

            span {
                color: ${theme.colors.colorLogo};
            }
        }

        button {
            width: 6rem;
            height: 6rem;
            background: ${theme.colors.colorLogo};

            a {
                color: #000;
                & svg {
                    width: 3rem;
                    height: 3rem;
                }
            }
        }
    `}
`
export const WrapperNav = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 55rem 1fr;
    padding: 6rem 0;
`
export const Form = styled.div`
    ${({ theme }) => css`
        max-width: 55rem;
        position: relative;

        & ::after {
            position: absolute;
            right: 0;
            bottom: 0;
            content: '';
            background: ${theme.colors.subtitleColor};
            width: 1px;
            height: 100%;
            display: block;
        }
        h3 {
            font-weight: 500;
            font-size: ${theme.font.sizes.large};
            line-height: 3.7rem;
            color: ${theme.colors.textColor};

            span {
                color: ${theme.colors.colorLogo};
            }
        }
    `}
`
export const WrapperInput = styled.div`
    ${({ theme }) => css`
        margin-top: 3rem;
        input {
            height: 6rem;
            width: 28rem;
            min-width: 15rem;
            background: ${theme.colors.colorInput};
            font-weight: 400;
            font-size: ${theme.font.sizes.medium};
            line-height: 2.4rem;
            color: ${theme.colors.subtitleColor};
            border: none;
            padding: 0 1rem;
            outline: none;

            &::placeholder {
                font-family: 'Montserrat';
                font-weight: 400;
                font-size: ${theme.font.sizes.medium};
                line-height: 2.4rem;
                color: ${theme.colors.subtitleColor};
            }
            & :focus {
                background: ${theme.colors.colorInput};
            }
        }

        button {
            width: 12rem;
            height: 6rem;
            font-weight: 700;
            font-size: ${theme.font.sizes.medium};
            line-height: 2.4rem;
            color: ${theme.colors.blackText};
            background: ${theme.colors.textColor};
            border: none;
        }
    `}
`
export const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
export const WrapperNavLinks = styled.div`
    ${({ theme }) => css`
        h3 {
            font-weight: 700;
            font-size: ${theme.font.sizes.medium};
            line-height: 2.4rem;
            color: ${theme.colors.textColor};
            margin-bottom: 1rem;
        }

        li {
            padding: 1rem 0;
            a {
                font-weight: 400;
                font-size: ${theme.font.sizes.medium};
                line-height: 2.4rem;
                color: ${theme.colors.subtitleColor};
            }
        }
    `}
`
export const WrapperFooter = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 6rem 0;

        h3 {
            font-weight: 400;
            font-size: ${theme.font.sizes.medium};
            line-height: 2.4rem;
            color: ${theme.colors.subtitleColor};
        }
    `}
`
export const WrapperIcons = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;

        & div {
            cursor: pointer;
            padding: 1rem;

            & :hover {
                color: ${theme.colors.textColor};
            }

            & svg {
                color: ${theme.colors.subtitleColor};
                width: 3rem;
                height: 3rem;
                transition: all 0.3s ease;
            }
        }
    `}
`
