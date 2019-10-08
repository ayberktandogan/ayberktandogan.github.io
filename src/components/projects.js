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

export default function Projects() {
    const classes = useStyles();

    return (
        <section className={classes.section}>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h2" gutterBottom color="inherit">Projelerim</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <a href="https://github.com/ayberktandogan/ForFansubs-ReactApp---Front-end" target="_blank" rel="noopener noreferrer" className={classes.link}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title} color="inherit" gutterBottom>
                                            React & MaterialUI
                                    </Typography>
                                        <Typography gutterBottom variant="h4" color="inherit">
                                            ForFansubs Client
                                    </Typography>
                                        <Typography variant="body2" color="inherit" component="p">
                                            Anime & Manga çeviri grupları için yazılmış, içerik sisteminin front-end'i.
                                    </Typography>
                                    </CardContent>
                                </Card>
                            </a>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <a href="https://github.com/ayberktandogan/ForFansubs-ReactApp-Admin---Front-end" target="_blank" rel="noopener noreferrer" className={classes.link}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            React & MaterialUI
                            </Typography>
                                        <Typography gutterBottom variant="h4">
                                            ForFansubs Admin
                            </Typography>
                                        <Typography variant="body2" component="p">
                                            Anime & Manga çeviri grupları için yazılmış, içerik sisteminin admin paneli.
                            </Typography>
                                    </CardContent>
                                </Card>
                            </a>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <a href="https://github.com/ayberktandogan/ForFansubs-NodeApp---Back-End" target="_blank" rel="noopener noreferrer" className={classes.link}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            Node & Express & MariaDB
                                        </Typography>
                                        <Typography gutterBottom variant="h4">
                                            ForFansubs Back-end
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            Anime & Manga çeviri grupları için yazılmış, içerik sisteminin servisi.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </a>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </section>
    )
}