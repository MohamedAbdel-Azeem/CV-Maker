import { useState, useEffect } from "react";

import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';

import { StyledInput } from "../StyledInput";

export function DataEditorCard(props) {
        const [expanded, setExpanded] = useState(false);

        const toggleCard = () => {
            setExpanded(!expanded);
        };

        console.log(props)

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
            <div className="flex flex-col bg-gray-300 rounded-md p-4">
                <button onClick={toggleCard} className="flex justify-center items-center w-full text-xl">
                    {props.title} 
                    <Icon path={mdiMenuDown} size={1} color="black" />
                </button>
                {expanded && (
                    <div>
                        <StyledInput text="First Name" type="text" onChange={()=>{handleChange(setFirstName)}} value={FirstName}/>
                        <StyledInput text="Last Name" type="text" onChange={()=>{handleChange(setLastName)}} value={LastName}/>
                        <StyledInput text="Email" type="email" onChange={()=>{handleChange(setEmail)}} value={Email}/>
                        <StyledInput text="Phone" type="tel" onChange={()=>{handleChange(setPhone)}} value={Phone}/>
                        <StyledInput text="Country" type="text" onChange={()=>{handleChange(setCountry)}} value={Country}/>
                        <StyledInput text="City" type="text" onChange={()=>{handleChange(setCity)}} value={City}/>
                    </div>
                )}
            </div>
        );
        
    }
