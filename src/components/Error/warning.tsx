import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function WarningBox(props: WarningBoxProps) {
    return (
        <div className='bg-white rounded-xl shadow p-4 flex items-center border-l-4 border-yellow-600'>
            <HiOutlineExclamationCircle size={24} className='mr-4' /> {props.children}
        </div>
    );
}

interface WarningBoxProps {
    children: React.ReactNode;
}
