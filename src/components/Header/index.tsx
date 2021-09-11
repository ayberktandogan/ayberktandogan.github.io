import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { NAVBAR } from "../../config";
import { getLanguageFromURL } from "../../languages";

function NavItem(props: NavItemProps) {
    const active = props.activePath.length <= 4 ? props.activePath === props.path : props.activePath && props.activePath === props.path;

    return (
        <a className={`font-bold hover:text-purple-400 ${active ? "text-purple-900" : "text-purple-600"}`} href={props.path}>
            {props.title}
        </a>
    );
}

export default function Header(props: HeaderProps) {
    const [sidebar, setSidebar] = useState(false);
    console.log(getLanguageFromURL(props.activePath));

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
                                {NAVBAR[getLanguageFromURL(props.activePath)].map((item: NavItemProps) => (
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
                                {NAVBAR[getLanguageFromURL(props.activePath)].map((item: NavItemProps, idx: number) => (
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
