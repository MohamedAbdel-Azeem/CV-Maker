import { useState, useEffect } from "react";

import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';

import { StyledInput } from "../StyledInput";

export function DataEditorCard(props) {
        const [expanded, setExpanded] = useState(false);

        const toggleCard = () => {
            setExpanded(!expanded);
        };

        return (
            <div className="w-full flex flex-col bg-gray-300 rounded-md p-4">
                <button onClick={toggleCard} className="flex justify-center items-center w-full text-xl">
                    {props.title} 
                    <Icon path={mdiMenuDown} size={1} color="black" />
                </button>
                {expanded && (props.title === "Personal Information") && (
                    <PersonalInfo personalData={props.data} dataModifiers={props.dataModifiers}/>
                )}
                {expanded && (props.title === "Education") && (
                    <EducationInfo eduData={props.data} dataModifiers={props.dataModifiers}/>        
                )
                }
            </div>
        );
        
    }

function PersonalInfo(props){
        const [FirstName, setFirstName] = useState(props.personalData['First Name']);
        const [LastName, setLastName] = useState(props.personalData['Last Name']);
        const [Email, setEmail] = useState(props.personalData['Email']);
        const [Phone, setPhone] = useState(props.personalData['Phone']);
        const [Country, setCountry] = useState(props.personalData['country']);
        const [City, setCity] = useState(props.personalData['City']);

        const [triggerUpdate, setTriggerUpdate] = useState(false);

        const handleChange = (setter) => {
          setter(event.target.value);
          setTriggerUpdate(prevState => !prevState);  // Toggle the value of triggerUpdate
        };
        
        useEffect(() => {
          const newPersonalData = {
            'First Name': FirstName,
            'Last Name': LastName,
            'Email': Email,
            'Phone': Phone,
            'country': Country,
            'City': City
          };
          props.dataModifiers(newPersonalData);
        }, [triggerUpdate]);


        return (
            <div>
                <StyledInput text="First Name" type="text" onChange={()=>{handleChange(setFirstName)}} value={FirstName}/>
                <StyledInput text="Last Name" type="text" onChange={()=>{handleChange(setLastName)}} value={LastName}/>
                <StyledInput text="Email" type="email" onChange={()=>{handleChange(setEmail)}} value={Email}/>
                <StyledInput text="Phone" type="tel" onChange={()=>{handleChange(setPhone)}} value={Phone}/>
                <StyledInput text="Country" type="text" onChange={()=>{handleChange(setCountry)}} value={Country}/>
                <StyledInput text="City" type="text" onChange={()=>{handleChange(setCity)}} value={City}/>
            </div>
        );
}


function EducationInfo(props){

    const [schoolName, setSchoolName] = useState(props.eduData['School Name']);
    const [degree, setDegree] = useState(props.eduData['Degree']);
    const [field, setField] = useState(props.eduData['Field of Study']);
    const [schoolLocation, setSchoolLocation] = useState(props.eduData['School Location']);
    const [startDate, setStartDate] = useState(props.eduData['Start Date']);
    const [gradDate, setGradDate] = useState(props.eduData['Graduation Date']);

    const [triggerUpdate, setTriggerUpdate] = useState(false);

        const handleChange = (setter) => {
          setter(event.target.value);
          setTriggerUpdate(prevState => !prevState);  // Toggle the value of triggerUpdate
        };

        useEffect(() => {
            const newEducationData = {
                'School Name': schoolName,
                'Degree': degree,
                'Field of Study': field,
                'School Location': schoolLocation,
                'Start Date': startDate,
                'Graduation Date': gradDate
            };
            props.dataModifiers(newEducationData);
          }, [triggerUpdate]);

    return (
        <div>
            <StyledInput text="School Name*" type="text" id="schoolName" onChange={()=>{handleChange(setSchoolName)}} value={schoolName}/>
            <StyledInput text="Degree*" type="text" id="degree" onChange={()=>{handleChange(setDegree)}} value={degree} />
            <StyledInput text="Field of Study*" type="text" id="field" onChange={()=>{handleChange(setField)}} value={field} />
            <StyledInput text="School Location*" type="text" id="schoolLocation" onChange={()=>{handleChange(setSchoolLocation)}} value={schoolLocation} />
            <StyledInput text="Start Date*" type="text" id="startDate" onChange={()=>{handleChange(setStartDate)}} value={startDate} />
            <StyledInput text="Graduation Date*" type="text" id="gradDate" onChange={()=>{handleChange(setGradDate)}} value={gradDate} />
        </div>
    );
}