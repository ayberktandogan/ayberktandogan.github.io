import React from 'react'

import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/styles/makeStyles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles(theme => ({
    icon: {
        margin: "0 12px"
    },
    dot: {
        fontSize: "24px"
    },
    link: {
        transition: theme.transitions.create(['color'], {
            easing: theme.transitions.easing.sharp,
            duration: "100ms",
        }),
        "&:hover": {
            color: "#ccc"
        },
        textDecoration: "none",
        color: "inherit"
    }
}))

export default function Footer() {
    const classes = useStyles()

    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <a href="https://github.com/ayberktandogan" target="_blank" rel="noopener noreferrer" className={classes.link}>
                <FontAwesomeIcon className={classes.icon} icon={faGithub} size="2x" />
            </a>
            <span className={classes.dot}>•</span>
            <a href="https://www.linkedin.com/in/ayberk-tandogan/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                <FontAwesomeIcon className={classes.icon} icon={faLinkedinIn} size="2x" />
            </a>
        </Box>
    )
}