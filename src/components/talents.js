import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'

import { blue, orange, pink, red } from '@material-ui/core/colors'

import nodeJS from 'simple-icons/icons/node-dot-js'
import firebase from 'simple-icons/icons/firebase'
import mongoDB from 'simple-icons/icons/mongodb'
import mariaDB from 'simple-icons/icons/mariadb'
import mySQL from 'simple-icons/icons/mysql'

import reactJS from 'simple-icons/icons/react'
import webpack from 'simple-icons/icons/webpack'
import babel from 'simple-icons/icons/babel'
import gulp from 'simple-icons/icons/gulp'
import reactRouter from 'simple-icons/icons/reactrouter'
import redux from 'simple-icons/icons/redux'
import jQuery from 'simple-icons/icons/jquery'
import reactNative from 'simple-icons/icons/react'
import materialUI from 'simple-icons/icons/material-ui'
import styledComponents from 'simple-icons/icons/styled-components'
import bootstrap from 'simple-icons/icons/bootstrap'

import javascript from 'simple-icons/icons/javascript'
import python from 'simple-icons/icons/python'
import html5 from 'simple-icons/icons/html5'
import css3 from 'simple-icons/icons/css3'
import sass from 'simple-icons/icons/sass'

import figma from 'simple-icons/icons/figma'
import git from 'simple-icons/icons/git'
import adobephotoshop from 'simple-icons/icons/adobephotoshop'
import adobeaftereffects from 'simple-icons/icons/adobeaftereffects'
import microsoftword from 'simple-icons/icons/microsoftword'
import microsoftexcel from 'simple-icons/icons/microsoftexcel'
import microsoftpowerpoint from 'simple-icons/icons/microsoftpowerpoint'

const useStyles = makeStyles(theme => ({
    SectionBox: {
        outline: "none",
        outlineColor: "#62DAB4",
        color: "#fff",
        [theme.breakpoints.down('sm')]: {
            padding: 20
        },
        "& h1": {
            width: "100%",
            textAlign: "center",
            lineHeight: .77,
            [theme.breakpoints.down('sm')]: {
                top: -15
            }
        }
    },
    MainBox: {
        color: "white",
        boxShadow: theme.shadows[6]
    },
    InnerBox: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    LanguageBox: {
        backgroundColor: red["400"],
        padding: theme.spacing(4),
        height: "100%"
    },
    FrameworkBox: {
        backgroundColor: blue["500"],
        padding: theme.spacing(4),
        height: "100%"
    },
    BackEndBox: {
        backgroundColor: pink["500"],
        padding: theme.spacing(4),
        height: "100%"
    },
    ProgramBox: {
        backgroundColor: orange["800"],
        padding: theme.spacing(4),
        height: "100%"
    },
    ListItemBox: {
        minWidth: 100,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: theme.spacing(1),
        '& div': {
            filter: "brightness(0) invert(1)",
        },
        "& p": {
            margin: 0,
            whiteSpace: "pre-wrap"
        }
    },
    listItem: {
        overflow: "hidden",
        margin: "5px 0",
    },
    tooltip: {
        fontSize: theme.typography.pxToRem(16),
        backgroundColor: "#000",
        border: '1px solid #000'
    }
}))

function Talent({ name, icon }) {
    const classes = useStyles()

    return (
        <Box className={classes.ListItemBox}>
            <div className={classes.listItem}>
                <img height="48" width="48" src={`https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/${icon}.svg`} alt={icon} />
            </div>
            <p>{name}</p>
        </Box>
    )
}

export default function Talents() {
    const classes = useStyles()

    let backEndList = [
        {
            name: "NodeJS",
            icon: nodeJS.slug
        },
        {
            name: "Firebase",
            icon: firebase.slug
        },
        {
            name: "MongoDB",
            icon: mongoDB.slug
        },
        {
            name: "MariaDB",
            icon: mariaDB.slug
        },
        {
            name: "MySQL",
            icon: mySQL.slug
        }
    ]

    let languageList = [
        {
            name: "Javascript",
            icon: javascript.slug
        },
        {
            name: "Python",
            icon: python.slug
        },
        {
            name: "HTML",
            icon: html5.slug
        },
        {
            name: "CSS",
            icon: css3.slug
        },
        {
            name: "Sass",
            icon: sass.slug
        }
    ]

    let frameworkList = [
        {
            name: "ReactJS",
            icon: reactJS.slug
        },
        {
            name: "React Native",
            icon: reactNative.slug
        },
        {
            name: "React Router",
            icon: reactRouter.slug
        },
        {
            name: "Redux",
            icon: redux.slug
        },
        {
            name: "webpack",
            icon: webpack.slug
        },
        {
            name: "Babel",
            icon: babel.slug
        },
        {
            name: "Gulp",
            icon: gulp.slug
        },
        {
            name: "Material-UI",
            icon: materialUI.slug
        },
        {
            name: "styled\ncomponents",
            icon: styledComponents.slug
        },
        {
            name: "Bootstrap",
            icon: bootstrap.slug
        },
        {
            name: "jQuery",
            icon: jQuery.slug
        }
    ]

    let programList = [
        {
            name: "Figma",
            icon: figma.slug
        },
        {
            name: "Git",
            icon: git.slug
        },
        {
            name: "Photoshop",
            icon: adobephotoshop.slug
        },
        {
            name: "After Effects",
            icon: adobeaftereffects.slug
        },
        {
            name: "Word",
            icon: microsoftword.slug
        },
        {
            name: "Excel",
            icon: microsoftexcel.slug
        },
        {
            name: "Powerpoint",
            icon: microsoftpowerpoint.slug
        },
    ]

    return (
        <section className={classes.SectionBox}>
            <Grid item xs={12}>
                <Typography variant="h1" gutterBottom color="inherit" className={classes.HeaderText}>Yetkinlikler</Typography>
                <div className={classes.MainBox}>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={12} md={6}>
                            <div className={classes.LanguageBox}>
                                <Typography variant="h4" gutterBottom color="inherit">Dil</Typography>
                                <div className={classes.InnerBox}>
                                    {languageList.map(i => <Talent key={i.name.trim().toLowerCase()} {...i} />)}
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className={classes.FrameworkBox}>
                                <Typography variant="h4" gutterBottom color="inherit">Framework - Library</Typography>
                                <div className={classes.InnerBox}>
                                    {frameworkList.map(i => <Talent key={i.name.trim().toLowerCase()} {...i} />)}
                                </div>
                            </div>

                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className={classes.BackEndBox}>
                                <Typography variant="h4" gutterBottom color="inherit">Back-end</Typography>
                                <div className={classes.InnerBox}>
                                    {backEndList.map(i => <Talent key={i.name.trim().toLowerCase()} {...i} />)}
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className={classes.ProgramBox}>
                                <Typography variant="h4" gutterBottom color="inherit">Program</Typography>
                                <div className={classes.InnerBox}>
                                    {programList.map(i => <Talent key={i.name.trim().toLowerCase()} {...i} />)}
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </section>
    )
}