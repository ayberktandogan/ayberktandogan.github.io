import Box from '@material-ui/core/Box'
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
    }
}))


export default function About() {
    const classes = useStyles()

    return (
        <Box>
            <Typography variant="body1" className={classes.text}>
                Bana aşağıdaki linklerden ya da <a href="mailto:ayberk.tandogan@outlook.com">ayberk.tandogan@outlook.com</a> mail adresinden ulaşabilirsiniz.
                </Typography>
        </Box>
    )
}