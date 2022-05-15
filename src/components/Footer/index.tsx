import React from 'react'
import {
    FiArrowUp,
    FiInstagram,
    FiMail,
    FiTwitch,
    FiTwitter,
    FiYoutube
} from 'react-icons/fi'

import {
    Wrapper,
    Container,
    WrapperLogo,
    WrapperNav,
    Form,
    WrapperInput,
    Nav,
    WrapperNavLinks,
    WrapperFooter,
    WrapperIcons
} from './styles'

export function Footer() {
    return (
        <>
            <Wrapper>
                <Container>
                    <WrapperLogo>
                        <h1>
                            Rocket <span>NFTs</span>
                        </h1>
                        <button>
                            <a href="#inicio">
                                <FiArrowUp />
                            </a>
                        </button>
                    </WrapperLogo>
                </Container>
            </Wrapper>
            <Wrapper>
                <Container>
                    <WrapperNav>
                        <Form>
                            <h3>
                                Fique por dentro de <br />
                                <span>todas as novidades</span>
                            </h3>
                            <WrapperInput>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="nft@rocketseat.com.br"
                                />
                                <button>Enviar</button>
                            </WrapperInput>
                        </Form>
                        <Nav>
                            <WrapperNavLinks>
                                <h3>Empresa</h3>
                                <ul>
                                    <li>
                                        <a href="#">Sobre</a>
                                    </li>
                                    <li>
                                        <a href="#">Serviços</a>
                                    </li>
                                    <li>
                                        <a href="#">Time</a>
                                    </li>
                                    <li>
                                        <a href="#">Carreira</a>
                                    </li>
                                </ul>
                            </WrapperNavLinks>
                            <WrapperNavLinks>
                                <h3>Mapa</h3>
                                <ul>
                                    <li>
                                        <a href="#">Galeria</a>
                                    </li>
                                    <li>
                                        <a href="#">Populares</a>
                                    </li>
                                    <li>
                                        <a href="#">Vendas</a>
                                    </li>
                                    <li>
                                        <a href="#">Contato</a>
                                    </li>
                                </ul>
                            </WrapperNavLinks>
                            <WrapperNavLinks>
                                <h3>Links</h3>
                                <ul>
                                    <li>
                                        <a href="#">FAQs</a>
                                    </li>
                                    <li>
                                        <a href="#">Termos</a>
                                    </li>
                                    <li>
                                        <a href="#">Política</a>
                                    </li>
                                    <li>
                                        <a href="#">Ajuda</a>
                                    </li>
                                </ul>
                            </WrapperNavLinks>
                        </Nav>
                    </WrapperNav>
                </Container>
            </Wrapper>
            <Wrapper>
                <Container>
                    <WrapperFooter>
                        <h3>www.rocketseat.com.br</h3>
                        <WrapperIcons>
                            <div>
                                <FiInstagram href="#" />
                            </div>
                            <div>
                                <FiYoutube href="#" />
                            </div>
                            <div>
                                <FiTwitter href="#" />
                            </div>
                            <div>
                                <FiTwitch href="#" />
                            </div>
                            <div>
                                <FiMail href="#" />
                            </div>
                        </WrapperIcons>
                    </WrapperFooter>
                </Container>
            </Wrapper>
        </>
    )
}
