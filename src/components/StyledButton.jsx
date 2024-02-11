export function StyledButton({onClick, text, disabled = false}){
    
    const className = `${(disabled)? "bg-slate-400 text-slate-900" : "bg-sky-500 text-slate-100"}  px-4 py-2 rounded-lg hover:shadow-2xl`;

    return (
        <button className={className} onClick={onClick} disabled={disabled}>{text}</button>
    );
}