import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";

function ProjectLink(props: ProjectLinkProps) {
    let logo = <div></div>;

    switch (props.link) {
        case "Github":
            logo = <SiGithub />;
            break;
        case "Website":
            logo = <FaGlobe />;
        default:
            break;
    }

    return logo;
}

export default function ProjectLinks(props: ProjectLinksProps) {
    const list: React.ElementType[] = [];

    return (
        <>
            {props.links.map((p) => (
                <a href={p.link} rel='noreferrer' target='_blank'>
                    <div className='bg-blue-800 text-white p-2 rounded-xl shadow'>
                        <ProjectLink link={p.text} />
                    </div>
                </a>
            ))}
        </>
    );
}

interface ProjectLinkProps {
    link: string;
}

interface ProjectLinksProps {
    links: { link: string; text: string }[];
}
