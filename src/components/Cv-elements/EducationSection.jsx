export function EducationSection(props){
    return (
        <div className="w-full px-5 flex flex-col mt-4 space-y-5">
            <h2 className="text-3xl text-slate-900 font-medium underline underline-offset-2">Education</h2>
            <div className="w-full flex flex-col space-y-3 items-start justify-center">
                <h3 className="text-2xl font-normal underline underline-offset-2">{props.data['School Name']}</h3>
                <p className="text-xl">{props.data['School Location']}</p>
                <p className="text-xl">{props.data['Degree']} in {props.data['Field of Study']}</p>
                <p className="text-xl">{props.data['Start Date']} - {props.data['Graduation Date']}</p>
            </div>
            <hr className="w-1/2 self-center border-1 border-gray-700"/>
        </div>
    );
}