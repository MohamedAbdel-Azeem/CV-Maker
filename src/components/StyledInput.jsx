import  { useState } from 'react';
import '../styles/StyledInput.scss';
import { v4 as uuidv4 } from 'uuid';

export function StyledInput(props){
    const [wasTouched, setWasTouched] = useState(false);

    const inputId = props.id ?? uuidv4();

    const handleChange = (event) => {
        props.onChange(event.target.value);
      };

    const handleBlur = () => {
        setWasTouched(true);
    };

    const inputClassName = `form__field ${wasTouched ? 'required' : ''}`
    const labelClassName = `form__label ${wasTouched ? 'required' : ''}`

    return (
        <div className="form__group field">
            <input type={props.type} className= {inputClassName} onBlur={handleBlur} placeholder={props.text} name={props.text} id={inputId} onChange={handleChange} value={props.value} required />
            <label htmlFor={inputId} className={labelClassName}>{props.text}</label>
        </div>
    );
}

export function StyledTextArea(props){

    const inputId = props.id ?? uuidv4();

    const handleChange = (event) => {
        props.onChange(event.target.value);
      };

    const inputClassName = `form__field`
    const labelClassName = `form__label`

    return (
        <div className="form__group field">
            <textarea className= {inputClassName} placeholder={props.text} name={props.text} id={inputId} onChange={handleChange} value={props.value}/>
            <label htmlFor={inputId} className={labelClassName}>{props.text} (Optional)</label>
        </div>
    );
}