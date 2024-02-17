import '../styles/cvPage.css';
import { Accent } from './Cv-elements/Accent.jsx';

export function CvPage(props){
    return (
        <div className={`Cv-page flex ${props.layoutStyle} ${props.currentFont}`}>
            <Accent style={props.accentStyle} data={props.personalInfo}/>
            <div>
                <h1>Rest</h1>
            </div>
        </div>
    );
}