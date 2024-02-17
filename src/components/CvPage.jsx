import '../styles/cvPage.css';

export function CvPage(props){
    return (
        <div className={`Cv-page flex ${props.layoutStyle} ${props.currentFont}`}>
            <div style={props.accentStyle} className='p-10'>
                <h1>Accent</h1>
            </div>
            <div>
                <h1>Rest</h1>
            </div>
        </div>
    );
}