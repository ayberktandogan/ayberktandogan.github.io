import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    section: {
        outlineColor: "#ff5fa2",
        color: "#ff5fa2"
    },
    card: {
        backgroundColor: theme.palette.background.level1,
        transition: theme.transitions.create(['background-color', 'color'], {
            easing: theme.transitions.easing.sharp,
            duration: "100ms",
        }),
        "&:hover": {
            backgroundColor: theme.palette.background.level2,
            color: "white"
        },
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    link: {
        textDecoration: "none",
        color: "inherit"
    }
}));

function ProjectBox({ name, techs, description, link, classes }) {
    return (
        <Grid item xs={12} md={6}>
            <a href={link} target="_blank" rel="noopener noreferrer" className={classes.link}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="inherit" gutterBottom>
                            {techs}
                        </Typography>
                        <Typography gutterBottom variant="h4" color="inherit">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="inherit" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </a>
        </Grid>
    )
}

export default function Projects() {
    const classes = useStyles()

    const projectList = [
        {
            name: "ForFansubs Client",
            techs: "React & MaterialUI",
            description: "Anime & Manga çeviri grupları için yazılmış, içerik sisteminin front-end'i.",
            link: "https://github.com/ForFansubs/front-end"
        },
        {
            name: "ForFansubs Admin",
            techs: "React & MaterialUI",
            description: "Anime & Manga çeviri grupları için yazılmış, içerik sisteminin admin paneli.",
            link: "https://github.com/ForFansubs/front-end-admin"
        },
        {
            name: "ForFansubs Back-end",
            techs: "Node & Express & MariaDB",
            description: "Anime & Manga çeviri grupları için yazılmış, içerik sisteminin servisi.",
            link: "https://github.com/ForFansubs/node-server"
        }
    ]

    return (
        <section className={classes.section}>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h2" gutterBottom color="inherit">Projelerim</Typography>
                    <Grid container spacing={2}>
                        {projectList.map(p => <ProjectBox {...p} classes={classes} />)}
                    </Grid>

                </Box>
            </Grid>
        </section >
    )
}