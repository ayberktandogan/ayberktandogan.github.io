import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        textAlign: "center"
    },
    list: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
            color: "#62DAB4"
        },
        '& span': {
            fontWeight: "initial"
        }
    },
    section: {
        outlineColor: "#62DAB4",
        color: "#62DAB4"
    },
    splitter: {
        height: "20px"
    }
}))


export default function Talents() {
    const classes = useStyles()

    const splitter = <div className={classes.splitter} />

    return (
        <section className={classes.section}>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h2" gutterBottom color="inherit">Yetkinlikler</Typography>
                    <div className={classes.container}>
                        <Typography variant="h4" gutterBottom color="inherit">Paket Program</Typography>
                        <div className={classes.list}>
                            <Chip variant="outlined" label="Microsoft Office" />
                            <Chip variant="outlined" label="Adobe After Effects" />
                            <Chip variant="outlined" label="Adobe Photoshop" />
                            <Chip variant="outlined" label="MATLAB" />
                        </div>
                        {splitter}
                        <Typography variant="h4" gutterBottom color="inherit">Yazılım</Typography>
                        <div className={classes.list}>
                            <Chip variant="outlined" label="Node" color="secondary" />
                            <Chip variant="outlined" label="React" color="secondary" />
                            <Chip variant="outlined" label="MaterialUI" />
                            <Chip variant="outlined" label="Bootstrap" />
                            <Chip variant="outlined" label="Javascript" />
                            <Chip variant="outlined" label="HTML" />
                            <Chip variant="outlined" label="CSS" />
                            <Chip variant="outlined" label="jQuery" />
                            <Chip variant="outlined" label="ExpressJS" />
                            <Chip variant="outlined" label="MongoDB" />
                            <Chip variant="outlined" label="MySQL" />
                            <Chip variant="outlined" label="MariaDB" />
                            <Chip variant="outlined" label="Git" />
                            <Chip variant="outlined" label="Github" />
                        </div>
                    </div>
                </Box>
            </Grid>
        </section>
    )
}