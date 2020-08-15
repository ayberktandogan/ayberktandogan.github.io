import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    text: {
        textAlign: "center",
        whiteSpace: "pre-wrap",
        "& a": {
            color: theme.palette.primary.main,
            textDecoration: "none"
        }
    },
    section: {
        outlineColor: "#FCC89B",
        color: "#FCC89B",
        width: "100%"
    }
}))


export default function About() {
    const classes = useStyles()

    return (
        <section className={classes.section}>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h2" gutterBottom color="inherit">Bana ulaşın</Typography>
                    <Typography variant="body1" className={classes.text}>
                        Bana aşağıdaki linklerden ya da <a href="mailto:ayberk.tandogan@outlook.com">ayberk.tandogan@outlook.com</a> mail adresinden ulaşabilirsiniz.
                    </Typography>
                </Box>
            </Grid>
        </section >
    )
}