import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaEnvelope, FaFilePdf, FaMailBulk } from "react-icons/fa";
import { getLanguageFromURL } from "../../languages";

export default function FooterLinks(props: FooterLinksProps) {
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
            link: `/assets/cv.pdf`,
            logo: <FaFilePdf />,
        },
        {
            link: "mailto:ayberk.tandogan@outlook.com",
            logo: <FaEnvelope />,
        },
    ];

    return (
        <div className='flex w-full justify-center gap-4 mb-4'>
            {linkList.map((link) => (
                <a href={link.link} rel='noreferrer' target='_blank' className='text-gray-600 hover:text-gray-800 text-2xl'>
                    {link.logo}
                </a>
            ))}
        </div>
    );
}

interface FooterLinksProps {
    lang: string;
}
