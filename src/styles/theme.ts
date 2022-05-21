export default {
    grid: {
        container: '127.7rem'
    },
    colors: {
        bodyBackground: '#0e0e0e',
        colorLogo: '#ff5b50',
        cardColor: '#252525',
        textColor: '#fff',
        subtitleColor: '#5a5757',
        blackText: '#000',
        colorInput: '#0D0D0D'
    },
    font: {
        family: 'Montserrat, sans-serif',
        sizes: {
            small: 'clamp(1.2rem, 2vw, 1.6rem)',
            xsmall: 'clamp(1.4rem, 2vw, 1.8rem)',
            medium: 'clamp(1.6rem, 2vw, 2rem)',
            large: 'clamp(2rem, 2vw, 3rem)',
            xlarge: 'clamp(2.5rem, 2vw, 4rem)',
            huge: 'clamp(2rem, 4vw, 5rem)'
        },
        line: {
            small: 'clamp(1.1rem, 2vw, 1.6rem)',
            xsmall: 'clamp(1.6rem, 6vw, 2.2rem)',
            medium: 'clamp(2rem, 2vw, 3.2rem)',
            large: 'clamp(2.4rem, 2vw, 4rem)',
            xlarge: 'clamp(2.8rem, 4vw, 4.8rem)',
            huge: 'clamp(3.2rem, 4vw, 6.4rem)'
        }
    },
    spacings: {
        xsmall: '1.6rem',
        small: '2.4rem',
        medium: '3.2rem',
        large: '4.0rem',
        xlarge: '4.8rem',
        xxlarge: '6.4rem'
    },
    layers: {
        botton: '-1',
        middle: '1'
    }
} as const
