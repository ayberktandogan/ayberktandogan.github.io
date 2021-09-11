export default function NavButton(props: NavButtonProps) {
    return (
        <a
            className='text-medium md:text-xl shadow hover:shadow-xl bg-blue-600 hover:bg-blue-800 py-2 px-5 md:py-4 md:px-8 text-white rounded-xl md:rounded-3xl'
            href={props.path}
            target={props.target || "_self"}
        >
            {props.title} →
        </a>
    );
}

interface NavButtonProps {
    path: string;
    title: string;
    target?: string;
}
