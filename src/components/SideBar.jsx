import { LayoutStyler } from './Layout-editing/LayoutStyler';
import { FontStyler } from './Layout-editing/FontStyler';
import { StyledColorInput } from './Layout-editing/StyledColorInput';

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
    const currentLayout = props.data.currentLayout;
    const currentAccentColor = props.data.currentAccentColor;
    const currentFontColor = props.data.currentFontColor;
    return (
        <div className="h-full px-4 flex-grow pt-6 bg-slate-50 flex flex-col space-y-6 justify-start text-center items-center overflow-y-auto">
            <div>
                <h3 className='text-2xl font-medium'>Layout</h3>
                <div className='mt-4 flex flex-row space-x-7 items-center justify-center'>
                    <LayoutStyler layoutStyle={'flex-col'} layoutName={'Top'} isActive={'flex-col' === currentLayout} setCurrentLayout={props.data.setCurrentLayout}/>
                    <LayoutStyler layoutStyle={'flex-row'} layoutName={'Left'} isActive={'flex-row' === currentLayout} setCurrentLayout={props.data.setCurrentLayout}/>
                    <LayoutStyler layoutStyle={'flex-row-reverse'} layoutName={'Right'} isActive={'flex-row-reverse' === currentLayout} setCurrentLayout={props.data.setCurrentLayout}/>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center space-y-3'>
                <StyledColorInput text="Accent Color" currentColor={currentAccentColor} setCurrentColor={props.data.setCurrentAccentColor}/>
                <StyledColorInput text= "Font Color" currentColor={currentFontColor} setCurrentColor={props.data.setCurrentFontColor}/>
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