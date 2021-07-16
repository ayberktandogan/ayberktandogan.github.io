import { makeStyles } from "@material-ui/core/styles";
import Header from "./header";

const useStyles = makeStyles((theme) => ({
    OutsideContainer: {
        display: "flex",
        width: "100%",
        height: "100%",
    },
    ScrollNode: {
        width: "100%",
        height: "100%",
        overflowY: "overlay",
        "-webkit-transform": "translateZ(0)",
        transform: "translateZ(0)",
        padding: theme.spacing(0, 9, 0, 8),
        "&::-webkit-scrollbar-track": {},
        [theme.breakpoints.down("sm")]: {
            overflowY: "scroll",
            padding: theme.spacing(2, 4, 0),
            scrollbarWidth: "none" /* Firefox */,
            "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
        },
    },
    PaddingDiv: {
        boxSizing: "border-box",
        width: "100%",
        paddingRight: theme.spacing(8),
        [theme.breakpoints.down("sm")]: {
            paddingRight: theme.spacing(0),
            marginBottom: theme.spacing(8),
        },
    },
    MainContainer: {
        isolation: "isolate",
        height: "100vh",
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(0),
        },
    },
    "@global": {
        "*::-webkit-scrollbar": {
            width: 8,
            [theme.breakpoints.down("sm")]: {
                width: 0,
                height: 0,
            },
        },
        "*::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
            backgroundColor: theme.palette.background.paper,
        },
        "*::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
        },
    },
    HeaderContainer: {
        position: "absolute",
        zIndex: 2,
        right: 0,
        bottom: 0,
        top: 0,
        [theme.breakpoints.down("sm")]: {
            bottom: 0,
            left: 0,
            top: "initial",
            height: 72,
        },
    },
}));

export default function Wrapper(props) {
    const classes = useStyles();
    return (
        <div className={classes.OutsideContainer}>
            <div className={classes.HeaderContainer}>
                <Header />
            </div>
            <div className={classes.ScrollNode} id='scroll-node'>
                <div className={classes.PaddingDiv}>
                    <section className={classes.MainContainer}>
                        {props.children}
                    </section>
                </div>
            </div>
        </div>
    );
}
