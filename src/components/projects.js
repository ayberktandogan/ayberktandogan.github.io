import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Fade from '@material-ui/core/Fade'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'
import clsx from 'clsx'

import { ProjectForFansubs, ProjectKargoTakip } from '../config/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faBook } from '@fortawesome/free-solid-svg-icons'
import { purple, red } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
    SectionBox: {
        outlineColor: "transparent",
        color: "#fff",
        outline: 0,
        [theme.breakpoints.down('sm')]: {
            outlineColor: "#ff5fa2",
            color: "#ff5fa2",
            outline: "1px solid",
        },
        [theme.breakpoints.down('sm')]: {
            padding: 20
        },
        "& h2": {
            lineHeight: .77,
            [theme.breakpoints.down('sm')]: {
                top: -15
            }
        }
    },
    MainBox: {
        position: "relative",
        overflow: "hidden",
        boxShadow: theme.shadows[6]
    },
    GridBox: {
        background: props => props.accentColor || theme.palette.background.default,
    },
    ImageBox: {
        padding: theme.spacing(8),
        textAlign: "center",
        alignSelf: "center",
        "& img": {
            maxWidth: "100%",
            height: "auto",
            maxHeight: 400,
            boxShadow: theme.shadows[6],
            transition: theme.transitions.create(['box-shadow'], {
                easing: theme.transitions.easing.sharp,
                duration: "300ms",
            }),
            "&:hover": {
                boxShadow: theme.shadows[14],
            }
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0),
            paddingBottom: 0,
            "& img": {
                boxShadow: theme.shadows[0],
                "&:hover": {
                    boxShadow: theme.shadows[0],
                }
            },
        }
    },
    InformationBox: {
        padding: theme.spacing(8),
        whiteSpace: "pre-wrap",
        alignSelf: "center",
        color: props => props.textColor ? props.textColor : props.accentColor ? theme.palette.getContrastText(props.accentColor) : "inherit",
        textDecoration: "none",
        "& .MuiDivider-root": {
            margin: `${theme.spacing(2)}px 0`
        },
        "& .MuiButton-root": {
            margin: `0 ${theme.spacing(2)}px 0 0`,
            [theme.breakpoints.down('sm')]: {
                margin: `0 ${theme.spacing(1)}px ${theme.spacing(1)}px 0`,
            }
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        }
    },
    HeaderText: {
        marginLeft: -3,
        lineHeight: .77,
        [theme.breakpoints.down('sm')]: {
            marginLeft: -3,
            lineHeight: 1.2,
            top: -15
        }
    },
    PaginationBox: {
        display: "flex",
        justifyContent: "space-between",
        "& .MuiButton-root": {
            margin: `${theme.spacing(2)}px ${theme.spacing(2)}px 0 0`
        }
    },
    PaginationCirclesBox: {
        display: "flex",
        zIndex: 2,
        alignItems: "center"
    },
    PaginationCircles: {
        width: 10,
        height: 10,
        borderRadius: 8,
        backgroundColor: theme.palette.background.paper,
        marginLeft: theme.spacing(1),
        cursor: "pointer",
        transition: theme.transitions.create(['width', 'background-color'], {
            easing: theme.transitions.easing.sharp,
            duration: "200ms",
        }),
        // eslint-disable-next-line
        ['@media (hover: hover) and (pointer: fine)']: {
            '&:hover': {
                background: props => props.accentColor
            }
        }
    },
    PaginationCirclesActive: {
        width: 30,
        borderRadius: 8,
        backgroundColor: props => props.accentColor
    }
}));

const TransitionDuration = 200

function ProjectBox({ display, name, description, githubLink, websiteLink, docsLink, image, accentColor, textColor }) {
    const classes = useStyles({ accentColor, textColor })

    return (
        <Fade in={display} timeout={{ enter: TransitionDuration, exit: TransitionDuration }} mountOnEnter unmountOnExit>
            <Grid container justify="center" className={classes.GridBox}>
                <Grid item xs={12} sm={12} md={6} className={classes.ImageBox}>
                    <img src={image} alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={classes.InformationBox}>
                    <Typography variant="h1" component="h3" gutterBottom className={classes.HeaderText}>
                        {name}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {description}
                    </Typography>
                    <Divider />
                    {githubLink ?
                        <Button href={githubLink} variant="outlined" target="_blank">
                            <FontAwesomeIcon icon={faGithub} size="1x" /> Github
                        </Button>
                        : ""}
                    {websiteLink ?
                        <Button href={websiteLink} variant="outlined" target="_blank">
                            <FontAwesomeIcon icon={faGlobe} size="1x" /> SİTE
                        </Button>
                        : ""}
                    {docsLink ?
                        <Button href={docsLink} variant="outlined" target="_blank">
                            <FontAwesomeIcon icon={faBook} size="1x" /> Dökümanlar
                        </Button>
                        : ""}
                </Grid>
            </Grid>
        </Fade>
    )
}

export default function Projects() {
    const projectList = [
        {
            name: "ForFansubs",
            techs: "NodeJS & React & MaterialUI",
            description: "Anime & Manga çeviri toplulukları için yazılmış uygulama topluluğu. İşlerini saklayabilecekleri bir veritabanı olması yanında, bu işleri izleyicilerine de sunabilecekleri bir uygulamadır.\n\nBack-end'i NodeJS ve Express, front-end ve yönetim paneli React ve MaterialUI kullanılarak hazırlanmıştır.\n\nDetaylar için aşağıdaki linkleri kullanabilirsiniz.",
            githubLink: "https://github.com/ForFansubs",
            websiteLink: "https://forfansubs.github.io",
            docsLink: "https://forfansubs.github.io/docs",
            image: ProjectForFansubs,
            projectStart: "Yaz 2018",
            accentColor: purple["500"],
            textColor: "#fff"
        },
        {
            name: "Kargo Takip Uygulaması",
            techs: "MERN",
            description: "Hürriyet'te 1. zorunlu stajımı yaparken dosyam için hazırlamış olduğum Kargo Takip uygulaması.\n\nBack-end'de NodeJS & Express ve MongoDB, front-end'de React kullanarak hazırlandı. MERN stack uyumlu yazıldı.",
            githubLink: "https://github.com/ayberktandogan/MTM2002---Project1---Kargo_Takip",
            image: ProjectKargoTakip,
            projectStart: "Yaz 2018",
            accentColor: red["500"]
        }
    ]

    const [activePage, setActivePage] = useState(0)
    const classes = useStyles({ accentColor: projectList[activePage] ? projectList[activePage].accentColor : purple["500"] })

    function handlePreviousPage() {
        const tempActivePage = activePage

        setActivePage(null)
        setTimeout(() => {
            if (activePage - 1 < 0) {
                return setActivePage(projectList.length - 1)
            }
            return setActivePage(tempActivePage - 1)
        }, TransitionDuration)
    }

    function handleNextPage() {
        const tempActivePage = activePage

        setActivePage(null)
        setTimeout(() => {
            if (activePage + 1 >= projectList.length) {
                return setActivePage(0)
            }
            return setActivePage(tempActivePage + 1)
        }, TransitionDuration)
    }

    function handlePaginationClick(i) {
        setActivePage(null)
        setTimeout(() => {
            setActivePage(i)
        }, TransitionDuration)
    }

    return (
        <section className={classes.SectionBox}>
            <Box>
                <Typography variant="h2" gutterBottom color="inherit">Projelerim</Typography>
                <div className={classes.MainBox}>
                    {projectList.map((p, i) => <ProjectBox {...p} key={i} display={i === activePage} />)}
                </div>
            </Box>
            {projectList.length > 1 ?
                <>
                    <div className={classes.PaginationBox}>
                        <div>
                            <Button onClick={handlePreviousPage}>
                                ÖNCEKİ
                            </Button>
                            <Button onClick={handleNextPage}>
                                SONRAKİ
                            </Button>
                        </div>
                        <Box className={classes.PaginationCirclesBox}>
                            {projectList.map((c, i) => (
                                <div key={i + "featured"} onClick={() => handlePaginationClick(i)}>
                                    <div className={clsx(classes.PaginationCircles, {
                                        [classes.PaginationCirclesActive]: i === activePage
                                    })} />
                                </div>
                            ))}
                        </Box>
                    </div>
                </>
                : ""}
        </section >
    )
}

ProjectBox.propTypes = {
    display: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    techs: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    githubLink: PropTypes.string,
    websiteLink: PropTypes.string,
    docsLink: PropTypes.string,
    image: PropTypes.string.isRequired,
    projectStart: PropTypes.string,
    projectEnd: PropTypes.string,
    accentColor: PropTypes.string,
    textColor: PropTypes.string
}