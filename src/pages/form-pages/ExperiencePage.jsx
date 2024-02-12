import { useState } from "react";
import { StyledInput , StyledTextArea } from "../../components/StyledInput";
import { StyledButton } from "../../components/StyledButton";
import { v4 as uuidv4 } from 'uuid';
import Icon from '@mdi/react';
import { mdiPlusCircleOutline } from '@mdi/js';

export function ExperiencePage(props) {

    const [experiences, setExperiences] = useState([]);
    const [experienceData, setExperienceData] = useState({});

    const addExperience = (data) => {
        let newExperience = experienceData;
        newExperience[data['Experience Id']] = data;
        setExperienceData(newExperience);
    };


    const handleAdd = () => {
        const ExperienceId = uuidv4();
        const newExperience = [...experiences, <ExperienceForm key={ExperienceId} setData={setExperienceData} ExperienceId = {ExperienceId} />];
        setExperiences(newExperience);
    }

    console.log(experienceData);

    return (
        <div className="flex flex-col items-center space-y-5">
            {experiences}
            <button onClick={handleAdd}><Icon path={mdiPlusCircleOutline} size={2} color={"#475569"} /></button>
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
            <Card 
                companyName={savedData['Company Name']}
                positionTitle={savedData['Position Title']}
                startDate={savedData['Start Date']}
                endDate={savedData['End Date']}
                location={savedData['Location']}
                description={savedData['Description']}
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

function Card(props){
    return (
        <div className="w-96 bg-slate-300 flex flex-col space-y-4 justify-start pt-5 pb-4 px-8 text-center items-center rounded-xl shadow-md overflow-auto">
            <h1>{props.companyName}</h1>
            <h2>{props.positionTitle}</h2>
            <h3>{props.startDate} - {props.endDate}</h3>
            <h4>{props.location}</h4>
            <p className="text-wrap">{props.description}</p>
        </div>
    );
}
