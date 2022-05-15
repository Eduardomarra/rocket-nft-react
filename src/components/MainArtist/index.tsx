import React from 'react'

import {
    Container,
    Artists,
    GroupArtists,
    TextArtists,
    Title,
    Logo
} from './styles'

import badge from '../../assets/badge.svg'
import artista1 from '../../assets/artista-1.png'
import artista2 from '../../assets/artista-2.png'
import artista3 from '../../assets/artista-3.png'
import artista4 from '../../assets/artista-4.png'

export function MainArtist() {
    return (
        <>
            <Container>
                <Artists className="artists">
                    <p>
                        Mercado digital para colecionáveis em criptos e tokens
                        não fungível (NFT). Compre, venda e descubra ativos
                        digitais exclusivos para você.
                    </p>
                    <GroupArtists>
                        <img src={artista4} alt="" className="artist-1" />
                        <img src={artista3} alt="" className="artist-2" />
                        <img src={artista2} alt="" className="artist-3" />
                        <img src={artista1} alt="" className="artist-4" />
                        <TextArtists>
                            <p>+10</p>
                            <p>Artistas selecionados</p>
                        </TextArtists>
                    </GroupArtists>
                </Artists>
                <Title className="title">
                    <h1>
                        Descubra a verdadeira arte digital e colecione diversas{' '}
                        <span>NFT</span>
                    </h1>
                </Title>
                <Logo className="logo">
                    <img src={badge} alt="" />
                </Logo>
            </Container>
        </>
    )
}
