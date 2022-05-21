import React from 'react'

import {
    Wrapper,
    Container,
    Asside,
    WrapperAsside,
    BannerArtists,
    DescriptionBanner,
    WrapperDescription,
    ImageBanner
} from './styles'

import banner from '../../assets/banner.png'

export function Banner() {
    return (
        <>
            <Wrapper>
                <Container>
                    <Asside>
                        <WrapperAsside>
                            <h1>10K+</h1>
                            <span>Artes</span>
                        </WrapperAsside>
                        <WrapperAsside>
                            <h1>200+</h1>
                            <span>Vendas</span>
                        </WrapperAsside>
                        <WrapperAsside>
                            <h1>20</h1>
                            <span>Artistas</span>
                        </WrapperAsside>
                    </Asside>
                    <BannerArtists>
                        <DescriptionBanner>
                            <WrapperDescription>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Congue malesuada amet
                                    pretium lacus. Id <span>potenti diam</span>{' '}
                                    et cras odio viverra. Amet, velit ut hac
                                    sit. Enim ultricies mauris mattis nunc
                                    semper.
                                </p>
                                <a href="#">Lorem Ipsun</a>
                            </WrapperDescription>
                            <WrapperDescription>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Congue malesuada amet
                                    pretium lacus. Id <span>potenti diam</span>{' '}
                                    et cras odio viverra. Amet, velit ut hac
                                    sit. Enim ultricies mauris mattis nunc
                                    semper.
                                </p>
                                <a className="description" href="#">
                                    Lorem Ipsun
                                </a>
                            </WrapperDescription>
                        </DescriptionBanner>
                        <ImageBanner>
                            <img src={banner} alt="" />
                        </ImageBanner>
                    </BannerArtists>
                </Container>
            </Wrapper>
        </>
    )
}
