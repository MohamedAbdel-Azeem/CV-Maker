

export function StyledColorInput(props){

    const handleColorChange = (e) => {
        props.setCurrentColor(e.target.value);
    };

    const backgroundStyle = {
        backgroundColor: props.currentColor
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h4 className='text-xl font-medium mb-3'>{props.text}</h4>
            <div className={`color-picker-wrapper shadow-xl`} style={backgroundStyle}>
                <input type="color" className='color-picker hover:cursor-pointer' onChange={handleColorChange}/>
            </div>
        </div>
    );
}