import  { useState } from 'react';
import '../styles/StyledInput.scss';

export function StyledInput(props){

    const [wasTouched, setWasTouched] = useState(false);

    const handleBlur = () => {
        setWasTouched(true);
    };

    const inputClassName = `form__field ${wasTouched ? 'required' : ''}`
    const labelClassName = `form__label ${wasTouched ? 'required' : ''}`

    return (
        <div className="form__group field">
            <input type={props.type} className= {inputClassName} onBlur={handleBlur} placeholder={props.text} name={props.text} id={props.id} required />
            <label htmlFor={props.id} className={labelClassName}>{props.text}</label>
        </div>
    );
}