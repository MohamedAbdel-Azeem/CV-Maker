import { useState } from "react";
import { StyledInput , StyledTextArea } from "../../components/StyledInput";
import { StyledButton } from "../../components/StyledButton";
import { SmallCard } from "../../components/SmallCard";
import { v4 as uuidv4 } from 'uuid';
import Icon from '@mdi/react';
import { mdiPlusCircleOutline } from '@mdi/js';

export function ExperiencePage(props) {
    const [experiencesElement, setExperiencesElement] = useState([]);
    const [experienceData, setExperienceData] = useState([]);

    const addExperience = (data) => {
        const newExperience = [...experienceData, data];
        setExperienceData(newExperience);
    };

    const handleDelete = (cardKey) => {
        setExperienceData(prevExperienceData => prevExperienceData.filter(exp => exp['Experience Id'] !== cardKey));
        setExperiencesElement(prevExperiencesElement => prevExperiencesElement.filter(element => element.props.ExperienceId !== cardKey));
    };

    const handleAdd = () => {
        const experienceId = uuidv4();
        const newExperienceElement = (
            <ExperienceForm key={experienceId} deleteFunction={handleDelete} setData={addExperience} ExperienceId={experienceId} />
        );
        setExperiencesElement([...experiencesElement, newExperienceElement]);
    };

    const handleSubmit = () => {
        props.setData(experienceData);
        props.submit();
    }

    return (
        <div className="flex flex-col items-center space-y-5">
            <h2 className="text-2xl">Relevant Experience</h2>
            {experiencesElement}
            <button onClick={handleAdd}><Icon path={mdiPlusCircleOutline} size={2} color={"#475569"} /></button>
            <div className="flex flex-row space-x-2 pb-4">
                <StyledButton text="Back" onClick={props.prev} />
                <StyledButton text="Generate CV" onClick={handleSubmit} />
            </div>
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

    const [savedData, setSavedData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const ExperienceData = {
            'Experience Id': props.ExperienceId,
            'Company Name': companyName,
            'Position Title': positionTitle,
            'Start Date': startDate,
            'End Date': endDate,
            'Location': location,
            'Description': description
        };

        setSavedData(ExperienceData);

        props.setData(ExperienceData);
    };
    if (savedData){
        return (
            <SmallCard
                firstHeading={savedData['Company Name']}
                SecondHeading={savedData['Position Title']}
                startDate={savedData['Start Date']}
                endDate={savedData['End Date']}
                id={savedData['Experience Id']}
                deleteExperience={props.deleteFunction}
            />
        );
    }
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
                    <StyledButton type="submit" text="Save" />
                </div>
            </form>
        </div>
    );
}

