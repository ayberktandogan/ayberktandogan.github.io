import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineLaptop,
    AiOutlineProject,
} from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { grey } from "@material-ui/core/colors";
import {
    ABOUT_ME_PAGE,
    INDEX_PAGE,
    PROJECTS_PAGE,
    TALENTS_PAGE,
} from "../config/routes";

const useStyles = makeStyles((theme) => ({
    MainContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        overflow: "hidden",
        width: 72,
        backgroundColor: theme.palette.background.paper,
        transition: theme.transitions.create(["width"], {
            duration: theme.transitions.duration.complex,
        }),
        "& a": {
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            color: grey[400],
            textDecoration: "none",
            transition: theme.transitions.create(["color"], {
                duration: theme.transitions.duration.complex,
            }),
            "& svg": {
                marginTop: -2,
                width: 24,
                height: 24,
                margin: theme.spacing(0, 2.5),
            },
            "&:hover": {
                color: grey[600],
            },
            "&:last-child": {
                marginBottom: 0,
            },
        },
        "& $ActiveLink": {
            color: "white",
            "&:hover": {
                color: grey[400],
            },
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: 72,
            flexDirection: "row",
            "& $SocialMediaContainer": {
                display: "none",
            },
            "& $PaginationContainer": {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: 0,
                width: "100%",
                "& a": {
                    marginBottom: 0,
                    padding: theme.spacing(1),
                },
                [theme.breakpoints.down("sm")]: {
                    "& a": {
                        padding: theme.spacing(1, 2),
                    },
                },
            },
        },
    },
    PaginationContainer: {
        margin: "auto",
        "& a": {
            marginBottom: theme.spacing(4),
        },
    },
    ButtonText: {
        whiteSpace: "nowrap",
        width: "100%",
        fontFamily: "'Quicksand', sans-serif",
        fontSize: ".675rem",
    },
    ActiveLink: {},
    SocialMediaContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: theme.spacing(2, 0),
        "& a": {
            marginBottom: theme.spacing(2),
            "& svg": {
                width: 18,
                height: 18,
            },
        },
    },
}));

export default function Header() {
    const classes = useStyles();

    const NavLinkOptions = {
        activeClassName: classes.ActiveLink,
    };

    return (
        <>
            <header className={classes.MainContainer}>
                <div className={classes.PaginationContainer}>
                    <NavLink to={INDEX_PAGE} exact {...NavLinkOptions}>
                        <div className={classes.IconContainer}>
                            <AiOutlineHome />
                        </div>
                        <div className={classes.ButtonText}>Ana sayfa</div>
                    </NavLink>
                    <NavLink to={ABOUT_ME_PAGE} exact {...NavLinkOptions}>
                        <div className={classes.IconContainer}>
                            <AiOutlineUser />
                        </div>
                        <div className={classes.ButtonText}>Hakkımda</div>
                    </NavLink>
                    <NavLink to={TALENTS_PAGE} exact {...NavLinkOptions}>
                        <div className={classes.IconContainer}>
                            <AiOutlineLaptop />
                        </div>
                        <div className={classes.ButtonText}>Yeteneklerim</div>
                    </NavLink>
                    <NavLink to={PROJECTS_PAGE} exact {...NavLinkOptions}>
                        <div className={classes.IconContainer}>
                            <AiOutlineProject />
                        </div>
                        <div className={classes.ButtonText}>Projelerim</div>
                    </NavLink>
                </div>
                <div className={classes.SocialMediaContainer}>
                    <a
                        href='https://github.com/ayberktandogan'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FaGithub />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/ayberk-tandogan/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </header>
        </>
    );
}
