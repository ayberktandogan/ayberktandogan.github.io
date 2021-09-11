import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";

const linkList = [
    {
        link: "https://github.com/ayberktandogan",
        logo: <SiGithub />,
    },
    {
        link: "https://www.linkedin.com/in/ayberk-tandogan/",
        logo: <SiLinkedin />,
    },
    {
        link: "/assets/cv-tr.pdf",
        logo: <FaFilePdf />,
    },
];

export default function FooterLinks() {
    return (
        <div className='flex w-full justify-center gap-4 mb-4'>
            {linkList.map((link) => (
                <a href={link.link} target='_blank' className='text-gray-600 hover:text-gray-800 text-2xl'>
                    {link.logo}
                </a>
            ))}
        </div>
    );
}
