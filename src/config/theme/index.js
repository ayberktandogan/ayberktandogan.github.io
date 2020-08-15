import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const palette = {
    primary: { main: '#212121' },
    secondary: { main: 'rgb(255,127,80)' },
    background: {
        default: "#121212",
        level1: "#212121",
        level2: "#333",
        paper: "#424242"
    },
    contrastThreshold: 3,
    type: "dark"
}

const props = {
    MuiTypography: {
        variantMapping: {
            body2: 'span',
        },
    },
}

const typography = {
    fontFamily: "'Source Code Pro', monospace",
    h1: {
        fontWeight: "bold",
        fontSize: "3.4rem",
        lineHeight: 1.2
    },
    h2: {
        fontWeight: "bold",
        fontSize: "1.6rem",
        lineHeight: 1.2
    },
    h3: {
        fontWeight: "bold",
        fontSize: "1.4rem",
        lineHeight: 1.2
    },
    h4: {
        fontWeight: "bold",
        fontSize: "1.2rem"
    },
    h5: {
        fontWeight: "bold",
        fontSize: "1rem"
    },
    h6: {
        fontWeight: "bold",
        fontSize: ".8rem"
    },
    body1: {
        fontFamily: "'Inconsolata', monospace"
    },
    body2: {
        fontFamily: "'Inconsolata', monospace",
        fontSize: ".8rem",
        fontWeight: "bold",
        letterSpacing: "0.0075em",
        lineHeight: 1.6
    },
    subtitle1: {
        fontFamily: "'Inconsolata', monospace",
        lineHeight: 1.25
    },
    subtitle2: {
        fontFamily: "'Inconsolata', monospace"
    }
}

const overrides = {
    // Style sheet name ⚛️
    MuiAppBar: {
        colorPrimary: {
            backgroundColor: palette.background.level1
        }
    }
}

const transitions = {
    duration: {
        short: 400,
        shorter: 300
    },
    easing: {
        ease: "ease"
    }
}

const data = { palette, typography, overrides, transitions, props, themeName: "ayberktandogan.github.io" }

export default responsiveFontSizes(createMuiTheme({ ...data }))