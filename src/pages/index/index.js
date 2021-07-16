import { makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    MainContainer: {
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        [theme.breakpoints.down("sm")]: {},
    },
    NameContainer: {
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        position: "relative",
        "&:before": {
            content: "'<h1>'",
            display: "block",
            position: "absolute",
            top: theme.spacing(-2),
            fontSize: "0.75rem",
            fontWeight: 400,
            color: grey[700],
        },
        "&:after": {
            content: "'</h1>'",
            display: "block",
            position: "absolute",
            right: 0,
            fontSize: "0.75rem",
            bottom: theme.spacing(6),
            fontWeight: 400,
            color: grey[700],
        },
    },
    HelloText: {
        display: "flex",
        justifyContent: "space-between",
        gap: `${theme.spacing(4)}px`,
        marginLeft: -8,
        background: `linear-gradient(45deg,#fff,${grey[500]})`,
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        "& h2": {
            fontSize: "7.30rem",
            [theme.breakpoints.down("sm")]: {
                marginLeft: 6,
                fontSize: "3rem",
            },
        },
    },
    NameText: {
        fontWeight: "bold",
        fontSize: "5.5rem",
        color: theme.palette.primary.main,
        [theme.breakpoints.down("sm")]: {
            fontSize: "2.6rem",
        },
    },
    h1Before: {},
    Workplace: {
        marginTop: theme.spacing(2),
        textAlign: "right",
        color: grey[700],
    },
}));

export default function IndexPage() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.MainContainer}>
                <div className={classes.NameContainer}>
                    <div className={classes.HelloText}>
                        <Typography variant='h1' component='h2'>
                            Merhaba
                        </Typography>
                        <Typography variant='h1' component='h2'>
                            ben
                        </Typography>
                    </div>
                    <Typography
                        variant='h1'
                        gutterBottom
                        className={classes.NameText}
                    >
                        Ayberk Tandoğan
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        className={classes.Workplace}
                    >
                        currently @ Allianz Türkiye
                        <br />
                        as Software Engineer Intern
                    </Typography>
                </div>
            </div>
        </>
    );
}
