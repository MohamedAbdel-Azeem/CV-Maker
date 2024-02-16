export function LayoutStyler(props){
    return (
        <div className="flex flex-col space-y-4">
            <div className={`flex ${props.layoutStyle}`}>
                <div className="w-5 h-5 bg-blue-900"></div>
                <div className="w-5 h-5 bg-slate-200"></div>
            </div>
            <h5>{props.layoutName}</h5>
        </div>
    );
}