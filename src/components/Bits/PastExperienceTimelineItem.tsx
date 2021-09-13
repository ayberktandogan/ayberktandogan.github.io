export default function PastExperienceTimelineItem(props: PastExperienceTimelineItemProps) {
    return (
        <div className='relative z-10'>
            <img src={props.image} alt='' className='timeline-img bg-white' />
            <div className={`timeline-container ${props.idx % 2 === 0 ? "timeline-container-left" : ""}`}>
                <div className={`timeline-pointer ${props.idx % 2 === 0 ? "timeline-pointer-left" : ""}`} aria-hidden='true'></div>
                <div className='bg-white p-6 rounded-xl shadow'>
                    <span className='font-bold text-purple-600 text-sm tracking-wide'>{props.date}</span>
                    <h1 className='text-2xl font-bold pt-1'>{props.title}</h1>
                    <p className='pt-1 whitespace-pre-wrap'>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

interface PastExperienceTimelineItemProps {
    image: string;
    date: string;
    title: string;
    description: string;
    idx: number;
}
