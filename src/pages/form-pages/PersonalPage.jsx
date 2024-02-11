import { useState } from "react";
import { StyledInput } from "../../components/StyledInput";
import { StyledButton } from "../../components/StyledButton";

export function PersonalPage(props){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const personalInfo = {
            'First Name': firstName,
            'Last Name': lastName,
            'Email': email,
            'Phone': phone,
            'Address': address,
            'City': city
        };
        props.next();
        props.setData(personalInfo);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4 justify-start pt-5 px-4 text-center items-center">
                <div className="w-full flex flex-row space-x-6">
                    <StyledInput text="First Name*" type="text" id="firstname" onChange={setFirstName} />
                    <StyledInput text="Last Name*" type="text" id="lastname" onChange={setLastName} />
                </div>
                <StyledInput text="Email Address*" type="email" id="email" onChange={setEmail} />
                <StyledInput text="Phone Number*" type="tel" id="phone" onChange={setPhone} />
                <StyledInput text="Address*" type="text" id="address" onChange={setAddress} />
                <StyledInput text="City*" type="text" id="city" onChange={setCity} />
                <div className="flex flex-row space-x-4">
                    <StyledButton text="Back" disabled={true} />
                    <StyledButton type="submit" text="Next" />
                </div>
            </form>
        </div>
    );
}