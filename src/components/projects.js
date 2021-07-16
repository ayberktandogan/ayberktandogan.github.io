import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import clsx from "clsx";

import {
    ProjectErbasiMakina,
    ProjectForFansubs,
    ProjectKargoTakip,
} from "../config/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faBook } from "@fortawesome/free-solid-svg-icons";
import { orange, purple, red } from "@material-ui/core/colors";
import { fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    SectionBox: {
        outlineColor: "transparent",
        outline: 0,
        height: "100vh",
        padding: theme.spacing(8, 0),
        [theme.breakpoints.down("sm")]: {
            outlineColor: "#ff5fa2",
            color: "#ff5fa2",
            outline: "1px solid",
        },
        "& h1": {
            width: "100%",
            textAlign: "center",
            lineHeight: 0.77,
            [theme.breakpoints.down("sm")]: {
                top: -15,
            },
        },
        [theme.breakpoints.down("sm")]: {
            height: "100%",
            padding: theme.spacing(0),
            marginBottom: theme.spacing(9),
            paddingBottom: theme.spacing(22),
        },
    },
    MainBox: {
        position: "relative",
        overflow: "hidden",
        height: "100%",
        display: "flex",
    },
    GridBox: {},
    TechsBox: {
        "& img": {
            height: 36,
            filter: "brightness(0) invert(1)",
            margin: `${theme.spacing(2)}px ${theme.spacing(
                2
            )}px ${theme.spacing(2)}px 0`,
        },
    },
    ImageBox: {
        alignSelf: "center",
        "& img": {
            maxWidth: "100%",
            height: "auto",
            maxHeight: 400,
            transition: theme.transitions.create(["transform", "box-shadow"], {
                easing: theme.transitions.easing.sharp,
                duration: "300ms",
            }),
            "&:hover": {
                transform: "translate(8px, -8px)",
                boxShadow: (props) =>
                    `-1px 1px  ${props.accentColor}, -2px 2px  ${props.accentColor}, -3px 3px  ${props.accentColor}, -4px 4px  ${props.accentColor}, -5px 5px  ${props.accentColor}, -6px 6px  ${props.accentColor}, -7px 7px  ${props.accentColor}, -8px 8px  ${props.accentColor}`,
            },
        },
        [theme.breakpoints.down("sm")]: {
            paddingBottom: `${theme.spacing(2)}px!important`,
            "& img": {
                boxShadow: theme.shadows[0],
                "&:hover": {
                    boxShadow: theme.shadows[0],
                },
            },
        },
    },
    InformationBox: {
        whiteSpace: "pre-wrap",
        alignSelf: "center",
        textDecoration: "none",
        "& .MuiDivider-root": {
            margin: `${theme.spacing(2)}px 0`,
        },
        "& .MuiButton-root": {
            margin: `0 ${theme.spacing(2)}px 0 0`,
            [theme.breakpoints.down("sm")]: {
                margin: `0 ${theme.spacing(1)}px ${theme.spacing(1)}px 0`,
            },
        },
        [theme.breakpoints.down("sm")]: {
            paddingTop: `${theme.spacing(0)}px!important`,
        },
    },
    HeaderText: {
        marginLeft: -3,
        lineHeight: 0.77,
        marginBottom: theme.spacing(4),
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "3rem",
            marginLeft: -3,
            marginBottom: theme.spacing(2),
            lineHeight: 1.2,
            top: -15,
        },
    },
    PaginationBox: {
        display: "flex",
        justifyContent: "space-between",
        "& .MuiButton-root": {
            margin: `${theme.spacing(2)}px ${theme.spacing(2)}px 0 0`,
        },
    },
    PaginationCirclesBox: {
        display: "flex",
        zIndex: 2,
        alignItems: "center",
    },
    PaginationCircles: {
        width: 10,
        height: 10,
        borderRadius: 8,
        backgroundColor: theme.palette.background.paper,
        marginLeft: theme.spacing(1),
        cursor: "pointer",
        transition: theme.transitions.create(["width", "background-color"], {
            easing: theme.transitions.easing.sharp,
            duration: "200ms",
        }),
        // eslint-disable-next-line
        ["@media (hover: hover) and (pointer: fine)"]: {
            "&:hover": {
                background: (props) => props.accentColor,
            },
        },
    },
    PaginationCirclesActive: {
        width: 30,
        borderRadius: 8,
        backgroundColor: (props) => props.accentColor,
    },
}));

const TransitionDuration = 200;

function ProjectBox({
    display,
    name,
    description,
    techs,
    githubLink,
    websiteLink,
    docsLink,
    image,
    accentColor,
    textColor,
}) {
    const classes = useStyles({ accentColor, textColor });

    return (
        <Fade
            in={display}
            timeout={{ enter: TransitionDuration, exit: TransitionDuration }}
            mountOnEnter
            unmountOnExit
        >
            <Grid
                container
                justify='center'
                spacing={8}
                className={classes.GridBox}
            >
                <Grid item xs={12} sm={12} md={6} className={classes.ImageBox}>
                    <img src={image} alt='' />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.InformationBox}
                >
                    <div className={classes.TechsBox}>
                        {Array.isArray(techs)
                            ? techs.map((t) => <img src={t} alt='' />)
                            : techs}
                    </div>
                    <Typography
                        variant='h1'
                        component='h3'
                        className={classes.HeaderText}
                    >
                        {name}
                    </Typography>
                    <Typography variant='body1' component='p'>
                        {description}
                    </Typography>
                    <Divider />
                    {githubLink ? (
                        <Button
                            href={githubLink}
                            variant='outlined'
                            target='_blank'
                        >
                            <FontAwesomeIcon icon={faGithub} size='1x' /> Github
                        </Button>
                    ) : (
                        ""
                    )}
                    {websiteLink ? (
                        <Button
                            href={websiteLink}
                            variant='outlined'
                            target='_blank'
                        >
                            <FontAwesomeIcon icon={faGlobe} size='1x' /> SİTE
                        </Button>
                    ) : (
                        ""
                    )}
                    {docsLink ? (
                        <Button
                            href={docsLink}
                            variant='outlined'
                            target='_blank'
                        >
                            <FontAwesomeIcon icon={faBook} size='1x' />{" "}
                            Dökümanlar
                        </Button>
                    ) : (
                        ""
                    )}
                </Grid>
            </Grid>
        </Fade>
    );
}

export default function Projects() {
    const projectList = [
        {
            name: "ForFansubs",
            techs: [],
            description:
                "Anime & Manga çeviri toplulukları için yazılmış uygulama topluluğu. İşlerini saklayabilecekleri bir veritabanı olması yanında, bu işleri izleyicilerine de sunabilecekleri bir uygulamadır.\n\nBack-end'i NodeJS, Express ve MariaDB, front-end ve yönetim paneli React ve MaterialUI kullanılarak hazırlanmıştır.\n\nDetaylar için aşağıdaki linkleri kullanabilirsiniz.",
            githubLink: "https://github.com/ForFansubs",
            websiteLink: "https://forfansubs.github.io",
            docsLink: "https://forfansubs.github.io/docs",
            image: ProjectForFansubs,
            projectStart: "Yaz 2018",
            accentColor: purple["500"],
            textColor: "#fff",
        },
        {
            name: "Erbaşı Makina",
            techs: [],
            description:
                "Erbaşı Makina'nın istekleri doğrultusunda, fabrikasının geçmişini, verdiği servisleri ve fabrika içerisinde bulunan parçaların listenebileceği ve kullanıcılar tarafından görüntülenebileceği bir site hazırlandı.\n\nParça resimleri ve bilgileri Firebase'de tutulacak şekilde, React ve MaterialUI kullanılarak hazırlandı.",
            websiteLink: "https://erbasimakina.com",
            image: ProjectErbasiMakina,
            projectStart: "Sonbahar 2020",
            accentColor: orange["500"],
        },
        {
            name: "Kargo Takip Uygulaması",
            techs: [],
            description:
                "Hürriyet'te 1. zorunlu stajımı yaparken dosyam için hazırlamış olduğum Kargo Takip uygulaması.\n\nBack-end'de NodeJS & Express ve MongoDB, front-end'de React kullanarak hazırlandı. MERN stack uyumlu yazıldı.",
            githubLink:
                "https://github.com/ayberktandogan/MTM2002---Project1---Kargo_Takip",
            image: ProjectKargoTakip,
            projectStart: "Yaz 2018",
            accentColor: red["500"],
        },
    ];

    const [activePage, setActivePage] = useState(0);
    const classes = useStyles({
        accentColor: projectList[activePage]
            ? projectList[activePage].accentColor
            : purple["500"],
    });

    useEffect(() => {
        document.addEventListener("keydown", handleKeyInput, false);
        return () => {
            document.removeEventListener("keydown", handleKeyInput, false);
        };
    }, [activePage]);

    function handleKeyInput(event) {
        if (event.defaultPrevented) {
            return;
        }

        switch (event.key) {
            case "ArrowLeft":
                handlePreviousPage();
                break;
            case "ArrowRight":
                handleNextPage();
                break;
            default:
                return;
        }
    }

    function handlePreviousPage() {
        const tempActivePage = activePage;

        setActivePage(null);
        setTimeout(() => {
            return setActivePage((_) => {
                if (tempActivePage - 1 < 0) return projectList.length - 1;
                return tempActivePage - 1;
            });
        }, TransitionDuration);
    }

    function handleNextPage() {
        const tempActivePage = activePage;

        setActivePage(null);
        setTimeout(() => {
            return setActivePage((_) => {
                if (tempActivePage + 1 >= projectList.length) return 0;
                return tempActivePage + 1;
            });
        }, TransitionDuration);
    }

    function handlePaginationClick(i) {
        setActivePage(null);
        setTimeout(() => {
            setActivePage(i);
        }, TransitionDuration);
    }

    return (
        <section className={classes.SectionBox}>
            <div className={classes.MainBox}>
                {projectList.map((p, i) => (
                    <ProjectBox {...p} key={i} display={i === activePage} />
                ))}
            </div>
            {projectList.length > 1 ? (
                <>
                    <div className={classes.PaginationBox}>
                        <div>
                            <Button
                                variant='outlined'
                                onClick={handlePreviousPage}
                            >
                                ÖNCEKİ
                            </Button>
                            <Button variant='outlined' onClick={handleNextPage}>
                                SONRAKİ
                            </Button>
                        </div>
                        <Box className={classes.PaginationCirclesBox}>
                            {projectList.map((c, i) => (
                                <div
                                    key={i + "featured"}
                                    onClick={() => handlePaginationClick(i)}
                                >
                                    <div
                                        className={clsx(
                                            classes.PaginationCircles,
                                            {
                                                [classes.PaginationCirclesActive]:
                                                    i === activePage,
                                            }
                                        )}
                                    />
                                </div>
                            ))}
                        </Box>
                    </div>
                </>
            ) : (
                ""
            )}
        </section>
    );
}

ProjectBox.propTypes = {
    display: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    techs: PropTypes.array,
    description: PropTypes.string.isRequired,
    githubLink: PropTypes.string,
    websiteLink: PropTypes.string,
    docsLink: PropTypes.string,
    image: PropTypes.string.isRequired,
    projectStart: PropTypes.string,
    projectEnd: PropTypes.string,
    accentColor: PropTypes.string,
    textColor: PropTypes.string,
};
