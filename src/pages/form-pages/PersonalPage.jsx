import { useState } from "react";
import { StyledInput } from "../../components/StyledInput";
import { StyledButton } from "../../components/StyledButton";
import { data } from "autoprefixer";

export function PersonalPage(props){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const personalInfo = {
            'First Name': firstName,
            'Last Name': lastName,
            'Email': email,
            'Phone': phone,
            'country': country,
            'City': city
        };
        props.next();
        props.setData(personalInfo);
    };

    return (
        <div className="pb-4">
            <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4 justify-start pt-5 px-4 text-center items-center">
                <h2 className="text-2xl">Personal Information</h2>
                <div className="w-full flex flex-row space-x-6">
                    <StyledInput text="First Name*" type="text" id="firstname" onChange={setFirstName} value={firstName} />
                    <StyledInput text="Last Name*" type="text" id="lastname" onChange={setLastName} value={lastName}/>
                </div>
                <StyledInput text="Email Address*" type="email" id="email" onChange={setEmail} value={email} />
                <StyledInput text="Phone Number*" type="tel" id="phone" onChange={setPhone} value={phone} />
                <StyledInput text="Country*" type="text" id="country" onChange={setCountry} value={country}/>
                <StyledInput text="City*" type="text" id="city" onChange={setCity} value={city}/>
                <div className="flex flex-row space-x-4">
                    <StyledButton text="Back" disabled={true} />
                    <StyledButton type="submit" text="Next" />
                </div>
            </form>
        </div>
    );
}