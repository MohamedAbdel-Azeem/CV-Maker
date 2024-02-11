import '../styles/StyledInput.scss';

export function StyledInput(props){
    return (
        <div className="form__group field">
            <input type={props.type} className="form__field" placeholder={props.text} name={props.text} id={props.id} required />
            <label htmlFor={props.id} className="form__label">Name</label>
        </div>
    );
}