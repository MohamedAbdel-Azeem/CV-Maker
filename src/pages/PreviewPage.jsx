import { useState } from 'react';
import { SideBar } from "../components/SideBar";

export function PreviewPage(props){
    const [currentFont, setCurrentFont] = useState('font-sans');
    const [currentLayout, setCurrentLayout] = useState('flex-col');

    const [currentAccentColor , setCurrentAccentColor] = useState('#172554');
    const [currentFontColor , setCurrentFontColor] = useState('#0f172a');


    const DivStyle = {
        backgroundColor: currentAccentColor,
        color: currentFontColor
    };

    const personalInfo = props.formData.personalData;
    const eduInfo = props.formData.eduData;
    const expInfo = props.formData.expData;
    console.log(props.formData)
    return (
        <div className={`w-full h-5/6 bg-slate-200 flex flex-row space-y-4 justify-start text-center items-center overflow-y-auto`}>
        <SideBar currentFont={currentFont} setCurrentFont={setCurrentFont} currentLayout={currentLayout} setCurrentLayout={setCurrentLayout} currentAccentColor={currentAccentColor} setCurrentAccentColor={setCurrentAccentColor} currentFontColor={currentFontColor} setCurrentFontColor={setCurrentFontColor}/>
        <div className={`flex ${currentLayout} ${currentFont}`} style={DivStyle}>
            <h1>Preview Page</h1>
            <p>{personalInfo['First Name']}</p>
            <p>{eduInfo['School Name']}</p>
        </div>
        </div>
    );
}