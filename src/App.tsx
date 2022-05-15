import React from 'react'

import { BodyBackground } from './components/BodyBackground'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Banner } from './components/Banner'
import { PopularWeek } from './components/PopularWeek'
import { BestArtists } from './components/BestArtists'
import { Footer } from './components/Footer'

function App() {
    return (
        <>
            <Header />
            <Main />
            <BodyBackground />
            <Banner />
            <PopularWeek />
            <BestArtists />
            <Footer />
        </>
    )
}

export default App
