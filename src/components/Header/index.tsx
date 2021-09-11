import { useState } from "react";
import { HiMenu } from "react-icons/hi";

const navItems = [
    {
        title: "Ana sayfa",
        path: "/",
    },
    {
        title: "Hakkımda",
        path: "/about-me",
    },
    {
        title: "Projelerim",
        path: "/projects",
    },
    {
        title: "Deneyimlerim",
        path: "/past-experiences",
    },
];

function NavItem(props: NavItemProps) {
    const active =
        props.activePath === "/"
            ? props.activePath === props.path
            : props.activePath && props.activePath.slice(0, props.activePath.length - 1) === props.path;

    return (
        <a
            className={`font-bold hover:text-purple-400 ${active ? "text-purple-900" : "text-purple-600"}`}
            active={props.activePath === props.path ? "true" : "false"}
            href={props.path}
        >
            {props.title}
        </a>
    );
}

export default function Header(props: HeaderProps) {
    const [sidebar, setSidebar] = useState(false);

    function handleSidebarButton() {
        if (!sidebar) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
        setSidebar((state: Boolean) => !state);
    }

    return (
        <>
            <header>
                <div className='absolute w-full'>
                    <div className='flex justify-end sm:justify-start items-center p-4 m-4 md:m-8'>
                        <div className='hidden sm:block'>
                            <nav className='flex gap-8'>
                                {navItems.map((item) => (
                                    <NavItem key={item.title} {...item} activePath={props.activePath} />
                                ))}
                            </nav>
                        </div>
                        <div className='sm:hidden'>
                            <button onClick={handleSidebarButton}>
                                <HiMenu size={24} className='text-purple-600' />
                            </button>
                        </div>
                    </div>
                </div>
                {sidebar ? (
                    <>
                        <div className='w-screen h-screen bg-white absolute z-50'>
                            <nav className='flex flex-col divide-y-2 divide-gray-200 divide-solid'>
                                {navItems.map((item, idx) => (
                                    <div className='px-8 py-4' onClick={handleSidebarButton}>
                                        <NavItem key={item.title} {...item} activePath={props.activePath} />
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </>
                ) : (
                    ""
                )}
            </header>
        </>
    );
}

interface NavItemProps {
    title: string;
    path: string;
    activePath: string;
}

interface HeaderProps {
    activePath: string;
}
