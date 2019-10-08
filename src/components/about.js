import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    text: {
        textAlign: "center",
        whiteSpace: "pre-wrap"
    },
    section: {
        outlineColor: "#FCC89B",
        color: "#FCC89B"
    }
}))


export default function About() {
    const classes = useStyles()

    return (
        <section className={classes.section}>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h2" gutterBottom color="inherit">Hakkımda</Typography>
                    <Typography variant="body1" className={classes.text}>{`Yıldız Teknik Üniversitesi'nde Matematik Mühendisliği bölümünde okuyorum. Front-end teknolojiler konusunda meraklı ve öğrenme isteği olan birisiyim. NodeJS ve React kullanarak API servisleri ve web programları hazırlayabiliyorum. Gelecek dönemde Python ve .NET Core öğrenerek, web tarafında olan bilgilerimi arttırmak ve kendimi geliştirmek istiyorum.\n\nHobilerim müzik dinlemek ve çeviri yapmak. Profesyonel derecede İngilizce kullanabiliyorum.`} </Typography>
                </Box>
            </Grid>
        </section>
    )
}