import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';

export function SmallCard(props) {

    const handleDelete = () => {
        props.deleteExperience(props.id);
    }

    return (
        <div className="w-72 bg-slate-300 flex flex-col space-y-4 justify-start pt-5 pb-4 px-8 text-center items-center rounded-xl shadow-md transition-transform duration-100 overflow-auto">
            <div className='w-full flex justify-end'>
                <button onClick={handleDelete}><Icon path={mdiDelete} size={1} color="#dc2626" /></button>
            </div>
            <h1>{props.firstHeading}</h1>
            <h2>{props.SecondHeading}</h2>
            <h3>{props.startDate} - {props.endDate}</h3>
        </div>
    );
}