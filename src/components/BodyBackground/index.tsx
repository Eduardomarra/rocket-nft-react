import React from 'react'

import { Background } from './styles'

import imgBackground from '../../assets/background-big.svg'

export function BodyBackground() {
    return (
        <>
            <Background>
                <img src={imgBackground} alt="" />
            </Background>
        </>
    )
}
