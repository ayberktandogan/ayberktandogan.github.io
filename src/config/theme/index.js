import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red'
import { purple } from '@material-ui/core/colors';

const palette = {
    primary: { main: purple[700] },
    secondary: { main: 'rgb(255,127,80)' },
    background: {
        default: "#121212",
        paper: "#212121"
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
    fontFamily: "Geomanist",
    body1: {
        fontFamily: "'Open Sans', sans-serif"
    },
    body2: {
        fontFamily: "'Open Sans', sans-serif",
        fontSize: ".8rem",
        fontWeight: "bold",
        letterSpacing: "0.0075em",
        lineHeight: 1.6
    },
    subtitle1: {
        fontFamily: "'Open Sans', sans-serif",
        lineHeight: 1.25
    },
    subtitle2: {
        fontFamily: "'Open Sans', sans-serif"
    }
}

const overrides = {
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