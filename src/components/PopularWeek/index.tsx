import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

import {
    Container,
    WrapperArtists,
    WrapperAstronaut,
    Artists,
    Title,
    Description,
    ImageAstronaut
} from './styles'

import imageAsronaut from '../../assets/astronauta-1.png'

export function PopularWeek() {
    return (
        <>
            <Container>
                <h1>
                    <span>Populares</span> da semana
                </h1>
                <WrapperArtists>
                    <WrapperAstronaut>
                        <Artists>
                            <Title>
                                <h2>Astronauta 1</h2>
                                <FiArrowUpRight />
                            </Title>
                            <Description>
                                <h4>Mayk Brito</h4>
                                <span>1.50RKT</span>
                            </Description>
                            <ImageAstronaut>
                                <img src={imageAsronaut} alt="" />
                            </ImageAstronaut>
                        </Artists>
                        <Artists>
                            <Title>
                                <h2>Astronauta 1</h2>
                                <FiArrowUpRight />
                            </Title>
                            <Description>
                                <h4>João Inácio (Biro)</h4>
                                <span>3.75RKT</span>
                            </Description>
                            <ImageAstronaut>
                                <img src={imageAsronaut} alt="" />
                            </ImageAstronaut>
                        </Artists>
                    </WrapperAstronaut>
                    <WrapperAstronaut>
                        <Artists>
                            <Title>
                                <h2>Astronauta 1</h2>
                                <FiArrowUpRight />
                            </Title>
                            <Description>
                                <h4>Jakellyne Grazielly</h4>
                                <span>2.0RKT</span>
                            </Description>
                            <ImageAstronaut>
                                <img src={imageAsronaut} alt="" />
                            </ImageAstronaut>
                        </Artists>
                        <Artists>
                            <Title>
                                <h2>Astronauta 1</h2>
                                <FiArrowUpRight />
                            </Title>
                            <Description>
                                <h4>Tamires Santos</h4>
                                <span>4.30RKT</span>
                            </Description>
                            <ImageAstronaut>
                                <img src={imageAsronaut} alt="" />
                            </ImageAstronaut>
                        </Artists>
                    </WrapperAstronaut>
                </WrapperArtists>
            </Container>
        </>
    )
}
