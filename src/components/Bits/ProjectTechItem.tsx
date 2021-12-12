import {
    SiAngular,
    SiFirebase,
    SiJava,
    SiJavascript,
    SiMariadb,
    SiMaterialUi,
    SiNodeDotJs,
    SiReact,
    SiSpring,
    SiTypescript,
    SiVueDotJs,
    SiVuetify
} from "react-icons/si";

export default function TechItem(props: TechItemProps) {
    let logo = <div></div>;

    switch (props.tech) {
        case "MaterialUI": {
            logo = <SiMaterialUi size={16} />;
            break;
        }
        case "React": {
            logo = <SiReact size={16} />;
            break;
        }
        case "Firebase": {
            logo = <SiFirebase size={16} />;
            break;
        }
        case "NodeJS": {
            logo = <SiNodeDotJs size={16} />;
            break;
        }
        case "MariaDB": {
            logo = <SiMariadb size={16} />;
            break;
        }
        case "JavaScript": {
            logo = <SiJavascript size={16} />;
            break;
        }
        case "TypeScript": {
            logo = <SiTypescript size={16} />;
            break;
        }
        case "Java": {
            logo = <SiJava size={16} />;
            break;
        }
        case "Angular": {
            logo = <SiAngular size={16} />;
            break;
        }
        case "Spring Boot": {
            logo = <SiSpring size={16} />;
            break;
        }
        case "Vue": {
            logo = <SiVueDotJs size={16} />
        }
        case "Vuetify": {
            logo = <SiVuetify size={16} />
        }
        default:
            break;
    }

    return (
        <span className='flex items-center gap-2 md:gap-4 shadow-lg bg-purple-600 text-white text-sm md:text-medium font-medium rounded-xl px-4 py-2'>
            {logo} {props.tech}
        </span>
    );
}

interface TechItemProps {
    tech: string;
}
