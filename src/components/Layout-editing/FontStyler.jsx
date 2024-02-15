export function FontStyler(props){

    let colorClassName = "";

    if (props.isActive){
        colorClassName = "bg-blue-900 text-slate-50";
    } else {
        colorClassName = "bg-slate-50 text-blue-900";
    }

    const hadleClick = () => {
        props.setCurrentFont(props.font);
    };

    const className = `px-3 py-2 text-center rounded-md shadow-md flex flex-col ${colorClassName} ${props.font}`;

    return (
        <button className= {className} onClick={hadleClick}>
            <span className="text-2xl">Aa</span>
            <span className="text-md">{props.text}</span>
        </button>
    );
}