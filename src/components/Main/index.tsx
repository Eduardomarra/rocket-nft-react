import React from 'react'

import { MainArtist } from '../MainArtist'
import { Gallery } from '../Gallery'
import { Container } from './styles'

export function Main() {
    return (
        <>
            <Container>
                <MainArtist />
                <Gallery />
            </Container>
        </>
    )
}
