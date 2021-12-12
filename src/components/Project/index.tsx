export default function Project(props: any) {
    const mClass = props.idx % 3 === 0 ? "md:mr-4" : props.idx % 3 === 1 ? "md:ml-2 md:mr-2" : props.idx % 3 === 2 ? "md:ml-4" : "";
    const tClass = props.idx / 3 >= 1 ? "md:mt-4" : "";

    return (
        <a href={props.url} className='w-full md:w-1/3 group mb-4 md:mb-0'>
            <div className={`bg-white group-hover:bg-gray-100 shadow group-hover:shadow-xl p-8 rounded-xl h-full ${mClass} ${tClass}`}>
                <div
                    className={`${
                        props.bgInvert
                            ? "bg-gradient-to-br from-purple-800 to-purple-400 rounded"
                            : props.bgColor ?
                            props.bgColor : "bg-gradient-to-br from-red-800 to-red-400 rounded"
                    } p-2 flex justify-center`}
                >
                    {props.logo ? (
                        <img src={props.logo} className='max-h-16' />
                    ) : (
                        <h3 className='text-white text-lg text-center font-semibold'>{props.title}</h3>
                    )}
                </div>
                <h2 className='font-bold mt-4 text-xl'>{props.title}</h2>
                <span className='font-medium text-lg'>
                    {props.company ? `${props.company} - ` : ""} {props.startDate}
                </span>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {props.techStack.split(",").map((stack) => (
                        <span key={`${stack.trim()}-${props.path}`} className='text-sm bg-purple-600 text-white rounded px-2'>
                            {stack.trim()}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
}
