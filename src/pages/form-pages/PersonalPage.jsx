import { StyledInput } from "../../components/StyledInput";
import { StyledButton } from "../../components/StyledButton";

export function PersonalPage(){
    return (
        <div>
            <form className="w-full flex flex-col space-y-4 justify-start pt-5 px-4 text-center justify-center items-center">
                <div className="w-full flex flex-row space-x-6">
                    <StyledInput text="First Name*" type="text" id="firstname" />
                    <StyledInput text="Last Name*" type="text" id="lastname" />
                </div>
                <StyledInput text="Email Address*" type="email" id="email" />
                <StyledInput text="Phone Number*" type="tel" id="phone" />
                <StyledInput text="Address*" type="text" id="address" />
                <StyledInput text="City*" type="text" id="city" />
                <div className="flex flex-row space-x-4">
                    <StyledButton text="Back" disabled = {true}/>
                    <StyledButton text="Next" />
                </div>
            </form>
        </div>
    );
}