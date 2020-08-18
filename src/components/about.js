import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'
import { Divider } from '@material-ui/core'
import { yellow } from '@material-ui/core/colors'

import { aboutMe } from '../config/assets'

const useStyles = makeStyles(theme => ({
    SectionBox: {
        outline: "none",
        outlineColor: "#FCC89B",
        color: "#fff",
        [theme.breakpoints.down('sm')]: {
            padding: 20
        }
    },
    MainBox: {
        backgroundColor: yellow["800"],
        color: "black",
        boxShadow: theme.shadows[6]
    },
    ImageBox: {
        textAlign: "center",
        alignSelf: "center",
        "& img": {
            height: "auto",
            maxWidth: "100%",
            maxHeight: 600,
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0),
            paddingBottom: 0,
        }
    },
    InnerBox: {
        padding: theme.spacing(8),
        alignSelf: "center",
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2)
        },
    },
    AboutText: {
        whiteSpace: "pre-wrap"
    }
}))


export default function About() {
    const classes = useStyles()

    return (
        <section className={classes.SectionBox}>
            <Grid item xs={12}>
                <Box>
                    <Grid container className={classes.MainBox}>
                        <Grid item xs={12} sm={12} md={6} className={classes.ImageBox}>
                            <img src={aboutMe} alt="" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} className={classes.InnerBox}>
                            <Typography variant="body1" className={classes.AboutText}>
                                {`Yıldız Teknik Üniversitesi'nde Matematik Mühendisliği bölümünde okuyorum. Front-end teknolojiler konusunda meraklı ve öğrenme isteği olan birisiyim. NodeJS ve React kullanarak API servisleri ve web programları hazırlayabiliyorum. Gelecek dönemde Python ve .NET Core öğrenerek, web tarafında olan bilgilerimi arttırmak ve kendimi geliştirmek istiyorum.\n\nHobilerim müzik dinlemek ve çeviri yapmak. Profesyonel derecede İngilizce kullanabiliyorum.`}
                            </Typography>
                            <Box my={2}>
                                <Divider />
                            </Box>
                            <codersrank-widget
                                username="ayberktandogan"
                                style={{ "--bg-color": "#212121", "--header-bg-color": "#222", "--badge-bg-color": "#333", "--badge-text-color": "#fff" }}></codersrank-widget>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </section >
    )
}