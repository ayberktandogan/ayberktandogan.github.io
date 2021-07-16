import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import {
    SiAdobeaftereffects,
    SiAdobephotoshop,
    SiAngularjs,
    SiBabel,
    SiBootstrap,
    SiCss3,
    SiFigma,
    SiFirebase,
    SiGit,
    SiGulp,
    SiHtml5,
    SiJava,
    SiJavascript,
    SiJquery,
    SiMariadb,
    SiMaterialUi,
    SiMathworks,
    SiMicrosoftexcel,
    SiMicrosoftpowerpoint,
    SiMicrosoftsqlserver,
    SiMicrosoftword,
    SiMongodb,
    SiMysql,
    SiNextDotJs,
    SiNodeDotJs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiReactrouter,
    SiRedux,
    SiSass,
    SiStyledComponents,
    SiWebpack,
    SiTypescript
} from "react-icons/si";
import { motion, Scroll } from "framer-motion";
import { BashSvg } from "../config/assets";

let languageList = [
    {
        name: "Javascript",
        icon: (props) => <SiJavascript {...props} />,
    },
    {
        name: "Typescript",
        icon: (props) => <SiTypescript {...props} />,
    },
    {
        name: "Python",
        icon: (props) => <SiPython {...props} />,
    },
    {
        name: "Java",
        icon: (props) => <SiJava {...props} />,
    },
    {
        name: "MATLAB",
        icon: (props) => <SiMathworks {...props} />,
    },
    {
        name: "HTML",
        icon: (props) => <SiHtml5 {...props} />,
    },
    {
        name: "CSS",
        icon: (props) => <SiCss3 {...props} />,
    },
    {
        name: "Sass",
        icon: (props) => <SiSass {...props} />,
    },
];

let frameworkList = [
    {
        name: "ReactJS",
        icon: (props) => <SiReact {...props} />,
    },
    {
        name: "Next.js",
        icon: (props) => <SiNextDotJs {...props} />,
    },
    {
        name: "Angular",
        icon: (props) => <SiAngularjs {...props} />,
    },
    {
        name: "React Native",
        icon: (props) => <SiReact {...props} />,
    },
    {
        name: "React Router",
        icon: (props) => <SiReactrouter {...props} />,
    },
    {
        name: "Redux",
        icon: (props) => <SiRedux {...props} />,
    },
    {
        name: "webpack",
        icon: (props) => <SiWebpack {...props} />,
    },
    {
        name: "Babel",
        icon: (props) => <SiBabel {...props} />,
    },
    {
        name: "Gulp",
        icon: (props) => <SiGulp {...props} />,
    },
    {
        name: "Material-UI",
        icon: (props) => <SiMaterialUi {...props} />,
    },
    {
        name: "styled\ncomponents",
        icon: (props) => <SiStyledComponents {...props} />,
    },
    {
        name: "Bootstrap",
        icon: (props) => <SiBootstrap {...props} />,
    },
    {
        name: "jQuery",
        icon: (props) => <SiJquery {...props} />,
    },
];

let backEndList = [
    {
        name: "NodeJS",
        icon: (props) => <SiNodeDotJs {...props} />,
    },
    {
        name: "Firebase",
        icon: (props) => <SiFirebase {...props} />,
    },
    {
        name: "MongoDB",
        icon: (props) => <SiMongodb {...props} />,
    },
    {
        name: "MariaDB",
        icon: (props) => <SiMariadb {...props} />,
    },
    {
        name: "MySQL",
        icon: (props) => <SiMysql {...props} />,
    },
    {
        name: "MsSQL",
        icon: (props) => <SiMicrosoftsqlserver {...props} />,
    },
    {
        name: "PostgresQL",
        icon: (props) => <SiPostgresql {...props} />,
    },
];

let programList = [
    {
        name: "Figma",
        icon: (props) => <SiFigma {...props} />,
    },
    {
        name: "Git",
        icon: (props) => <SiGit {...props} />,
    },
    {
        name: "Photoshop",
        icon: (props) => <SiAdobephotoshop {...props} />,
    },
    {
        name: "After Effects",
        icon: (props) => <SiAdobeaftereffects {...props} />,
    },
    {
        name: "Word",
        icon: (props) => <SiMicrosoftword {...props} />,
    },
    {
        name: "Excel",
        icon: (props) => <SiMicrosoftexcel {...props} />,
    },
    {
        name: "Powerpoint",
        icon: (props) => <SiMicrosoftpowerpoint {...props} />,
    },
];

const useStyles = makeStyles((theme) => ({
    SectionBox: {
        color: "#fff",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(8, 0),
        "& h4": {
            fontWeight: 600,
        },
        [theme.breakpoints.down("sm")]: {
            "& > section": {
                margin: theme.spacing(2, 0),
            },
            padding: theme.spacing(4, 0, 22),
            marginBottom: theme.spacing(9),
        },
    },
    TalentContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: theme.spacing(4),
    },
    MainBox: {
        color: "white",
        boxShadow: theme.shadows[6],
    },
    InnerBox: {
        display: "flex",
        flexWrap: "wrap",
        padding: theme.spacing(0, 2),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(2),
        },
    },
    ListItemBox: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginRight: theme.spacing(4),
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.complex,
        }),
        "& svg": {
            transition: theme.transitions.create(["color"], {
                duration: theme.transitions.duration.complex,
            }),
        },
        "&:hover": {
            color: theme.palette.primary.main,
            "& svg": {
                color: theme.palette.primary.main,
            },
            transform: "scale(1.2)",
        },
        "& p": {
            margin: 0,
            whiteSpace: "pre-wrap",
            transition: theme.transitions.create(["color"], {
                duration: theme.transitions.duration.complex,
            }),
        },
        [theme.breakpoints.down("sm")]: {
            flex: "1 1 auto",
            marginRight: theme.spacing(0),
            padding: theme.spacing(2),
        },
    },
    ParallaxLayer: {
        display: "flex",
        alignItems: "center",
    },
    BashContainer: {
        position: "absolute",
        bottom: theme.spacing(8),
        right: 0,
        "& img": {
            width: 300,
        },
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    ListItem: {
        margin: "5px 0",
    },
}));

function Talent({ name, icon }) {
    const classes = useStyles();

    return (
        <Box className={classes.ListItemBox}>
            <div className={classes.ListItem}>{icon({ size: 60 })}</div>
            <p>{name}</p>
        </Box>
    );
}

export default function Talents() {
    const classes = useStyles();

    return (
        <section className={classes.SectionBox}>
            <section>
                <div className={classes.TalentContainer}>
                    <Typography variant='h4' color='inherit'>
                        Diller
                    </Typography>
                    <div className={classes.InnerBox}>
                        {languageList.map((i) => (
                            <Talent key={i.name.trim().toLowerCase()} {...i} />
                        ))}
                    </div>
                    <div className={classes.BashContainer}>
                        <motion.div
                            animate={{ y: -20 }}
                            transition={{
                                from: 20,
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 2,
                            }}
                        >
                            <img src={BashSvg} />
                        </motion.div>
                    </div>
                </div>
            </section>
            <section>
                <div className={classes.TalentContainer}>
                    <Typography variant='h4' color='inherit'>
                        Framework - Library
                    </Typography>
                    <div className={classes.InnerBox}>
                        {frameworkList.map((i) => (
                            <Talent key={i.name.trim().toLowerCase()} {...i} />
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className={classes.TalentContainer}>
                    <Typography variant='h4' color='inherit'>
                        Back-end
                    </Typography>
                    <div className={classes.InnerBox}>
                        {backEndList.map((i) => (
                            <Talent key={i.name.trim().toLowerCase()} {...i} />
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className={classes.TalentContainer}>
                    <Typography variant='h4' color='inherit'>
                        Program
                    </Typography>
                    <div className={classes.InnerBox}>
                        {programList.map((i) => (
                            <Talent key={i.name.trim().toLowerCase()} {...i} />
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}
