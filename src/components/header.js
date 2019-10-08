import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'

import { pp } from '../config/assets'

const useStyles = makeStyles(theme => ({
    pp: {
        width: '8em',
        maxWidth: '150px',
        borderRadius: '50%',
        boxShadow: theme.shadows[2],
        marginRight: `${theme.spacing(2)}px`
    },
    title: {
        whiteSpace: "pre-wrap"
    },
    comment: {
        color: theme.palette.grey["800"]
    }
}))

export default function Header() {
    const classes = useStyles()

    return (
        <Grid item xs={12}>
            <Box display="flex" alignItems="center" justifyContent="center">
                <img className={classes.pp} src={pp} alt="Profile" />
                <Typography variant="h5" component="h1" className={classes.title}>{`{`}<span className={classes.comment}>{`//Personal Info`}</span>{`\n"name": "Ayberk",\n"surname": "Tandoğan",\n"age": "22"\n}`}</Typography>
            </Box>
        </Grid>
    )
}