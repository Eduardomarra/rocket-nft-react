import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

import artist1 from '../../assets/artista-1.png'

import {
    Container,
    Title,
    WrapperArtists,
    Artist,
    Description,
    SubTitulo
} from './styles'

export type CardArtistStyle = {
    variant?: 'gray' | 'orange'
}

export function BestArtists(cardStyle: CardArtistStyle) {
    return (
        <>
            <Container>
                <Title>
                    Melhores <span>artistas</span>
                </Title>
                <WrapperArtists>
                    <Artist>
                        <img src={artist1} alt="" />
                        <Description>
                            <h3>Mayk Brito</h3>
                            <span>80 Fotografias</span>
                        </Description>
                    </Artist>
                    <Artist cardStyle={cardStyle}>
                        <img src={artist1} alt="" />
                        <Description>
                            <h3>Mayk Brito</h3>
                            <span>80 Fotografias</span>
                        </Description>
                    </Artist>
                    <Artist>
                        <img src={artist1} alt="" />
                        <Description>
                            <h3>Mayk Brito</h3>
                            <span>80 Fotografias</span>
                        </Description>
                    </Artist>
                    <Artist>
                        <img src={artist1} alt="" />
                        <Description>
                            <h3>Mayk Brito</h3>
                            <span>80 Fotografias</span>
                        </Description>
                    </Artist>
                    <Artist>
                        <img src={artist1} alt="" />
                        <Description>
                            <h3>Mayk Brito</h3>
                            <span>80 Fotografias</span>
                        </Description>
                    </Artist>
                    <Artist>
                        <img src={artist1} alt="" />
                        <Description>
                            <h3>Mayk Brito</h3>
                            <span>80 Fotografias</span>
                        </Description>
                    </Artist>
                </WrapperArtists>
                <SubTitulo>
                    <span>Ver todos os artistas</span>
                    <FiArrowUpRight />
                </SubTitulo>
            </Container>
        </>
    )
}
