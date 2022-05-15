import styled, { css } from 'styled-components'

export const Background = styled.div`
    height: calc(100vh - 114px);
    max-width: 100vw;

    img {
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
        z-index: -5;
    }
`
