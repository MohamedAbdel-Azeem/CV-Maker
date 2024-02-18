import '../styles/cvPage.css';
import { Accent } from './Cv-elements/Accent.jsx';

export function CvPage(props){

    const AccentLayoutStyle = (props.layoutStyle === 'flex-col')? 'flex-row' : 'flex-col';

    return (
        <div className={`Cv-page flex ${props.layoutStyle} ${props.currentFont}`}>
            <Accent style={props.accentStyle} data={props.personalInfo} layoutStyle={AccentLayoutStyle}/>
            <div>
                <h1>Rest</h1>
            </div>
        </div>
    );
}