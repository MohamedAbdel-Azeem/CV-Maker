import Icon from '@mdi/react';
import { mdiEmail,mdiPhone,mdiMapMarker } from '@mdi/js';


export function Accent(props){
    
    const firstName = props.data['First Name'].toUpperCase();
    const lastName = props.data['Last Name'].toUpperCase();
    
    return (
        <div style={props.style} className='py-10 px-6 flex flex-col space-y-5'>
            <h1 className="text-4xl font-medium">{firstName} {lastName}</h1>
            <div className={`flex ${props.layoutStyle} justify-center items-center ${(props.layoutStyle === 'flex-row')? 'space-x-4' : 'space-y-4'}`}>
                <span className='flex flex-row justify-center items-center space-x-3'>
                    <Icon path={mdiEmail} size={1} color={props.style.color}/>
                    <p>{props.data['Email']}</p>
                    <span>|</span>
                </span>
                <span className='flex flex-row justify-center items-center space-x-3'>
                    <Icon path={mdiPhone} size={1} color={props.style.color}/>
                    <p>{props.data['Phone']}</p>
                    <span>|</span>
                </span>
                <span className='flex flex-row justify-center items-center space-x-3'>
                    <Icon path={mdiMapMarker} size={1} color={props.style.color}/>
                    <p>{props.data['City']},{props.data['country']}</p>
                </span>
            </div>
        </div>
    );
}