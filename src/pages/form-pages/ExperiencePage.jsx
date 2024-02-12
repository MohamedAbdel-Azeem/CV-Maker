import { useState } from "react";
import { StyledInput , StyledTextArea } from "../../components/StyledInput";
import { StyledButton } from "../../components/StyledButton";
import { v4 as uuidv4 } from 'uuid';

export function ExperiencePage(props) {

    return (
        <div>
            <ExperienceForm />
        </div>
    );
}


function ExperienceForm(props){
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const ExperienceId = uuidv4();
        const ExperienceData = {
            'Experience Id': ExperienceId,
            'Company Name': companyName,
            'Position Title': positionTitle,
            'Start Date': startDate,
            'End Date': endDate,
            'Location': location,
            'Description': description
        };

        let experiences = props.ExperienceInfo;
        experiences[ExperienceId] = ExperienceData;

        props.setData(experiences);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4 justify-start pt-5 px-4 text-center items-center">
                <StyledInput text="Company Name*" type="text" onChange={setCompanyName} />
                <StyledInput text="Position Title*" type="text" onChange={setPositionTitle} />
                <div className="w-full flex flex-row space-x-6">
                    <StyledInput text="Start Date*" type="text" onChange={setStartDate} />
                    <StyledInput text="End Date*" type="text" onChange={setEndDate} />
                </div>
                <StyledInput text="Location*" type="text" onChange={setLocation} />
                <StyledTextArea text="Description" type="text" onChange={setDescription} />
                <div className="flex flex-row space-x-4">
                    <StyledButton type="submit" text="Next" />
                </div>
            </form>
        </div>
    );
}