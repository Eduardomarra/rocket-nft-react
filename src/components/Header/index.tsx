import React from 'react'

import metaMask from '../../assets/logo_MetaMask.svg'

import { Container, Logo, Nav, Button } from './styles'

export function Header() {
    return (
        <>
            <Container id="inicio">
                <Logo>
                    <h1>
                        Rocket <span>NFTs</span>
                    </h1>
                </Logo>
                <Nav>
                    <li>
                        <a href="#">Comprar NFT</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                </Nav>
                <Button>
                    <img src={metaMask} alt="" />
                    <span>Conectar carteira</span>
                </Button>
            </Container>
        </>
    )
}
