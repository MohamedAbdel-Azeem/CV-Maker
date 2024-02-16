export function LayoutStyler(props){

    const handleClick = () => {
        props.setCurrentLayout(props.layoutStyle);
    };

    return (
        <button onClick={handleClick}>
            <div className="flex flex-col space-y-4">
                <div className={`flex ${props.layoutStyle} h-10 w-8 border bg-slate-200 ${(props.isActive)? 'border-blue-950 border-2' : 'border-gray-300'} rounded-md shadow-sm`}>
                    <div className="p-2 bg-blue-900 rounded"></div>
                </div>
                <h5>{props.layoutName}</h5>
            </div>
        </button>
    );
}