
import { FontStyler } from './Layout-editing/FontStyler';

import Icon from '@mdi/react';
import { mdiPencil , mdiCog } from '@mdi/js';
import '../styles/ColorPicker.css';


export function SideBar(props){

    return (
        <div className='h-full flex flex-row bg-red-400'>
            <div className="h-full bg-blue-900 flex flex-col space-y-6 justify-start pt-12 px-4 text-center items-center overflow-y-auto">
                <Icon path={mdiPencil} size={1} color="#f1f5f9" />
                <Icon path={mdiCog} size={1} color="#f1f5f9" />
            </div>
            <EditLayout data={props}/>
        </div>
    );
}


function EditLayout(props){
    const currentFont = props.data.currentFont;
    return (
        <div className="h-full px-4 flex-grow pt-10 bg-slate-50 flex flex-col space-y-6 justify-start text-center items-center overflow-y-auto">
            <div>
                <h3>Layout</h3>
                <div className='flex flex-row space-y-5'>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
            </div>
            <div>
                <h3>Colors</h3>
                <div>
                    <h4>Accent Color</h4>
                    <div className='color-picker-wrapper'>
                        <input type="color" className='color-picker'/>
                    </div>
                </div>
                <div>
                    <h4>Font Color</h4>
                    <div className='color-picker-wrapper'>
                        <input type="color"/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col space-y-4'>
                <h3 className='text-2xl font-medium'>Fonts</h3>
                <div className='flex flex-row space-x-4'>
                    <FontStyler text="Sans" isActive={'font-sans' === currentFont} font="font-sans" setCurrentFont={props.data.setCurrentFont}/>
                    <FontStyler text="Serif" isActive={'font-serif' === currentFont} font="font-serif" setCurrentFont={props.data.setCurrentFont}/>
                    <FontStyler text="Mono" isActive={'font-mono' === currentFont} font="font-mono" setCurrentFont={props.data.setCurrentFont}/>
                </div>
            </div>
        </div>
    );
}