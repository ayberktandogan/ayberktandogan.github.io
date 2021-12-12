import { SiCss3, SiHtml5, SiJavascript, SiTypescript } from "react-icons/si";

const techStack = [
    {
        icon: "TypeScript",
    },
    {
        icon: "JavaScript",
    },
    {
        icon: "React",
    },
    {
        icon: "Angular",
    },
    {
        icon: "Vue",
    },
    {
        icon: "Node",
    },
    {
        icon: "Deno",
    },
    {
        icon: "Spring Boot",
    },
    {
        icon: "SQL",
    },
    {
        icon: "Jest",
    },
    {
        icon: "NoSQL",
    },
    {
        icon: "",
    },
];

export default function IndexTechStack() {
    return (
        <>
            {techStack.map((tech) => (
                <div className='separated-bullet'>{tech.icon}</div>
            ))}
        </>
    );
}
