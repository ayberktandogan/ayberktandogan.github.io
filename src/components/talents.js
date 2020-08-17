import React, { useEffect, useState } from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'

import { talentsBg } from '../config/assets'
import { blue, pink, red } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
    SectionBox: {
        outline: "none",
        outlineColor: "#62DAB4",
        color: "#62DAB4",
        [theme.breakpoints.down('sm')]: {
            padding: 20
        }
    },
    MainBox: {
        color: "white",
        boxShadow: theme.shadows[6]
    },
    HeaderText: {
        lineHeight: .77,
        [theme.breakpoints.down('sm')]: {
            lineHeight: 1.2,
            top: -15
        }
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
    ListItemBox: {
        minWidth: 100,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: theme.spacing(1),
        '& div': {
            filter: props => props.noInvert ? "" : "brightness(0) invert(1)",
        }
    },
    listItem: {
        background: `url("${talentsBg}")`,
        height: "64px",
        overflow: "hidden",
        margin: "5px 0",
        "& p": {
            margin: 0
        }
    },
    tooltip: {
        fontSize: theme.typography.pxToRem(16),
        backgroundColor: "#000",
        border: '1px solid #000'
    }
}))

function Talent({ name, sizex, position, hideText, noInvert }) {
    const classes = useStyles({ noInvert })

    return (
        <Box className={classes.ListItemBox}>
            <div className={classes.listItem} style={{ backgroundPosition: position, width: sizex }} />
            {hideText ?
                ""
                :
                <p>{name}</p>}
        </Box>
    )
}

export default function Talents() {
    const classes = useStyles()

    let backEndList = [
        {
            name: "NodeJS",
            sizex: "102px",
            position: "0 0",
            hideText: true
        },
        {
            name: "MongoDB",
            sizex: "67px",
            position: "-558px 0"
        },
        {
            name: "MySQL",
            sizex: "119px",
            position: "-625px 0",
            hideText: true
        },
        {
            name: "MariaDB",
            sizex: "64px",
            position: "-744px 0"
        }
    ]

    let languageList = [
        {
            name: "Javascript",
            sizex: "64px",
            position: "-173px 0"
        },
        {
            name: "Python",
            sizex: "64px",
            position: "-943px 0"
        },
        {
            name: "HTML",
            sizex: "57px",
            position: "-382px 0"
        },
        {
            name: "CSS",
            sizex: "57px",
            position: "-439px 0"
        },
        {
            name: "Sass",
            sizex: "85px",
            position: "-1007px 0",
            hideText: true
        }
    ]

    let frameworkList = [
        {
            name: "ReactJS",
            sizex: "71px",
            position: "-102px 0"
        },
        {
            name: "Material-UI",
            sizex: "81px",
            position: "-237px 0"
        },
        {
            name: "Bootstrap",
            sizex: "64px",
            position: "-318px 0"
        },
        {
            name: "jQuery",
            sizex: "62px",
            position: "-496px 0"
        },
        {
            name: "React Native",
            sizex: "71px",
            position: "-102px 0"
        },
        {
            name: "less",
            sizex: "149px",
            position: "-1092px 0",
            hideText: true
        }
    ]

    return (
        <section className={classes.SectionBox}>
            <Grid item xs={12}>
                <Typography variant="h2" gutterBottom color="inherit" className={classes.HeaderText}>Yetkinlikler</Typography>
                <div className={classes.MainBox}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <div className={classes.LanguageBox}>
                                <Typography variant="h4" gutterBottom color="inherit">Dil</Typography>
                                <div className={classes.InnerBox}>
                                    {languageList.map(i => <Talent key={i.name.trim().toLowerCase()} {...i} />)}
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <div className={classes.FrameworkBox}>
                                <Typography variant="h4" gutterBottom color="inherit">Framework</Typography>
                                <div className={classes.InnerBox}>
                                    {frameworkList.map(i => <Talent key={i.name.trim().toLowerCase()} {...i} />)}
                                </div>
                            </div>

                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <div className={classes.BackEndBox}>
                                <Typography variant="h4" gutterBottom color="inherit">Back-end</Typography>
                                <div className={classes.InnerBox}>
                                    {backEndList.map(i => <Talent key={i.name.trim().toLowerCase()} {...i} />)}
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </section>
    )
}