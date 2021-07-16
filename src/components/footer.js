import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/styles/makeStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedinIn,
    faGithub,
    faStackOverflow,
    faFreeCodeCamp,
} from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
    icon: {
        margin: "0 12px",
    },
    dot: {
        fontSize: "24px",
    },
    smalldot: {
        fontSize: "14px",
    },
    link: {
        transition: theme.transitions.create(["color"], {
            easing: theme.transitions.easing.sharp,
            duration: "100ms",
        }),
        "&:hover": {
            color: "#ccc",
        },
        textDecoration: "none",
        color: "inherit",
        "& img": {
            width: "28.46px",
            margin: "0 12px",
            display: "flex",
            filter: "invert(100%)",
            transition: theme.transitions.create(["filter"], {
                easing: theme.transitions.easing.sharp,
                duration: "100ms",
            }),
            "&:hover": {
                filter: "invert(80%)",
            },
        },
    },
}));

function BigDot({ classes }) {
    return <span className={classes.dot}>•</span>;
}

export default function Footer() {
    const classes = useStyles();

    return (
        <>
            <Box display='flex' justifyContent='center' alignItems='center'>
                <a
                    href='https://github.com/ayberktandogan'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.link}
                >
                    <FontAwesomeIcon
                        className={classes.icon}
                        icon={faGithub}
                        size='2x'
                    />
                </a>
                <BigDot classes={classes} />
                <a
                    href='https://www.linkedin.com/in/ayberk-tandogan/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.link}
                >
                    <FontAwesomeIcon
                        className={classes.icon}
                        icon={faLinkedinIn}
                        size='2x'
                    />
                </a>
                <BigDot classes={classes} />
                <a
                    href='https://stackoverflow.com/users/13009248/ayberk-tando%C4%9Fan'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.link}
                >
                    <FontAwesomeIcon
                        className={classes.icon}
                        icon={faStackOverflow}
                        size='2x'
                    />
                </a>
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center'>
                <a
                    href='https://github.com/ayberktandogan/ayberktandogan.github.io/tree/resources'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.link}
                >
                    <p className={classes.icon}>source code</p>
                </a>
            </Box>
        </>
    );
}
