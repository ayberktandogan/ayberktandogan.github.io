import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'


import { talentsBg } from '../config/assets'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: "center",
        flexWrap: 'wrap',
        [theme.breakpoints.up('sm')]: {
            justifyContent: "space-between"
        }
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
    },
    listItemContainer: {
        minWidth: 160,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        filter: "saturate(0%)",
        transition: theme.transitions.create(
            ["filter"],
            { duration: theme.transitions.duration.short }
        ),
        "&:hover": {
            filter: "saturate(100%)"
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


export default function Talents() {
    const classes = useStyles()

    const talentsList = [
        {
            name: "NodeJS",
            sizex: "102px",
            position: "0 0",
            hideText: true
        },
        {
            name: "ReactJS",
            sizex: "71px",
            position: "-102px 0"
        },
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
        },
        {
            name: "less",
            sizex: "149px",
            position: "-1092px 0",
            hideText: true
        },
        {
            name: "jQuery",
            sizex: "62px",
            position: "-496px 0"
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
        },
        {
            name: "React Native",
            sizex: "71px",
            position: "-872px 0"
        }
    ]

    function Talent({ name, sizex, position, hideText }) {
        return (
            <Box className={classes.listItemContainer}>
                <div className={classes.listItem} style={{ backgroundPosition: position, width: sizex }} />
                {hideText ?
                    ""
                    :
                    <p>{name}</p>}
            </Box>
        )
    }

    return (
        <section className={classes.section}>
            <Grid item xs={12}>
                <Box className={classes.container}>
                    <Typography variant="h2" gutterBottom color="inherit">Yetkinlikler</Typography>
                    {talentsList.map(t => <Talent key={t.name.trim().toLowerCase()} {...t} />)}
                </Box>
            </Grid>
        </section>
    )
}