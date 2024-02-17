import Icon from '@mdi/react';
import { mdiEmail,mdiPhone,mdiMapMarker } from '@mdi/js';


export function Accent(props){
    
    const firstName = props.data['First Name'];
    const lastName = props.data['Last Name'];
    
    return (
        <div style={props.style} className='p-10 flex flex-col space-y-5'>
            <h1 className="text-4xl font-medium">{firstName} {lastName}</h1>
            <div className='flex flex-row justify-center items-center space-x-4'>
                <Icon path={mdiEmail} size={1} color={props.style.color}/>
                <p>{props.data['Email']}</p>
                <span>|</span>
                <Icon path={mdiPhone} size={1} color={props.style.color}/>
                <p>{props.data['Phone']}</p>
                <span>|</span>
                <Icon path={mdiMapMarker} size={1} color={props.style.color}/>
                <p>{props.data['City']}</p>
            </div>
        </div>
    );
}