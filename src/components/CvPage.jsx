import '../styles/cvPage.css';
import { Accent } from './Cv-elements/Accent.jsx';
import { EducationSection } from './Cv-elements/EducationSection.jsx';
import { ExperienceSection } from './Cv-elements/ExperienceSection.jsx';

export function CvPage(props){

    const AccentLayoutStyle = (props.layoutStyle === 'flex-col')? 'flex-row' : 'flex-col';
    console.log(props);
    return (
        <div className={`Cv-page flex ${props.layoutStyle} ${props.currentFont}`}>
            <Accent style={props.accentStyle} data={props.personalInfo} layoutStyle={AccentLayoutStyle}/>
            <div className='flex flex-col items-center'>
                <EducationSection data={props.eduInfo}/>
                <ExperienceSection expData={props.expInfo}/>
            </div>
        </div>
    );
}