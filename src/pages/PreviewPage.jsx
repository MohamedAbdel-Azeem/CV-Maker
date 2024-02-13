export function PreviewPage(props){
    const personalInfo = props.formData.personalInfo;
    const eduInfo = props.formData.eduInfo;
    const expInfo = props.formData.expInfo;
    console.log(props.formData)
    return (
        <div className="w-full h-5/6 bg-slate-200 flex flex-col space-y-4 justify-start pt-12 px-4 text-center items-center overflow-y-auto">
        <h1>Preview Page</h1>
            <p>{personalInfo}</p>
            <p>{eduInfo}</p>
            <p>{expInfo}</p>
        </div>
    );
}