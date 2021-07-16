import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    SectionBox: {
        display: "flex",
        alignItems: "center",
        height: "100vh",
        gap: `${theme.spacing(4)}px`,
        [theme.breakpoints.down("sm")]: {
            height: "100%",
            flexDirection: "column",
            alignItems: "initial",
            paddingBottom: theme.spacing(22),
            marginBottom: theme.spacing(9),
        },
    },
    AboutText: {
        whiteSpace: "pre-wrap",
        fontFamily: "'Nunito', sans-serif",
        fontSize: "1.75rem",
    },
    WidgetContainer: {
        display: "flex",
        flexDirection: "column",
        gap: `${theme.spacing(4)}px`,
        minWidth: "30%",
    },
    Widget: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main),
        borderRadius: theme.spacing(1),
    },
}));

export default function About() {
    const classes = useStyles();

    return (
        <section className={classes.SectionBox}>
            <Typography variant='body1' className={classes.AboutText}>
                {`Yıldız Teknik Üniversitesi'nde Matematik Mühendisliği bölümünde okuyorum. Front-end teknolojiler konusunda meraklı ve öğrenme isteği olan birisiyim. NodeJS ve React kullanarak API servisleri ve web programları hazırlayabiliyorum. Gelecek dönemde .NET Core öğrenerek, web tarafında olan bilgilerimi arttırmak ve kendimi geliştirmek istiyorum.\n\nHobilerim müzik dinlemek ve çeviri yapmak. Profesyonel derecede İngilizce kullanabiliyorum.`}
            </Typography>
            <div className={classes.WidgetContainer}>
                <div className={classes.Widget} style={{ padding: 16 }}>
                    <codersrank-education
                        username='ayberktandogan'
                        branding='false'
                    ></codersrank-education>
                </div>
                <div className={classes.Widget}>
                    <codersrank-widget
                        username='ayberktandogan'
                        branding='false'
                        layout='horizontal'
                        style={{
                            "--bg-color": "transparent",
                            "--header-bg-color": "#212121",
                            "--badge-bg-color": "#212121",
                            "--badge-text-color": "#fff",
                        }}
                    ></codersrank-widget>
                </div>
            </div>
        </section>
    );
}
