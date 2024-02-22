import { useState } from "react";
import { StyledInput } from "../../components/StyledInput";
import { StyledButton } from "../../components/StyledButton";


export function EducationPage(props) {
    const [schoolName, setSchoolName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [gradDate, setGradDate] = useState('');
    const [degree, setDegree] = useState('');
    const [field, setField] = useState('');
    const [schoolLocation, setSchoolLocation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const EducationInfo = {
            'School Name': schoolName,
            'Start Date': startDate,
            'Graduation Date': gradDate,
            'Degree': degree,
            'Field of Study': field,
            'School Location': schoolLocation
        };
        props.next();
        props.setData(EducationInfo);
    };


    return (
        <div className="pb-4">
            <h2 className="text-2xl">Education</h2>
            <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4 justify-start pt-5 px-4 text-center items-center">
                <StyledInput text="School Name*" type="text" id="schoolName" onChange={setSchoolName} value={schoolName}/>
                <StyledInput text="Degree*" type="text" id="degree" onChange={setDegree} value={degree} />
                <StyledInput text="Field of Study*" type="text" id="field" onChange={setField} value={field} />
                <StyledInput text="School Location*" type="text" id="schoolLocation" onChange={setSchoolLocation} value={schoolLocation} />
                <div className="w-full flex flex-row space-x-6">
                    <StyledInput text="Start Date*" type="text" id="startDate" onChange={setStartDate} value={startDate} />
                    <StyledInput text="Graduation Date*" type="text" id="gradDate" onChange={setGradDate} value={gradDate} />
                </div>
                <div className="flex flex-row space-x-4">
                    <StyledButton text="Back" onClick={props.prev} />
                    <StyledButton type="submit" text="Next" />
                </div>
            </form>
        </div>
    );
}