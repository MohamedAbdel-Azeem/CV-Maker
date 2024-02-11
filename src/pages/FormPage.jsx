import { useState } from "react";
import { CustomeStepper } from "../components/Stepper";
import { PersonalPage } from "./form-pages/PersonalPage";

export function FormPage(props) {

    const [formlvl, setFormlvl] = useState(0);

    const [personalData, setPersonalData] = useState({});

    function nextFormLevel(){
        const newlvl = formlvl + 1;
        setFormlvl(newlvl);
    }

    function prevFormLevel(){
        const newlvl = formlvl - 1;
        setFormlvl(newlvl);
    }

    console.log(personalData);

    return (
        <div className="w-full h-5/6 bg-slate-200 flex flex-col space-y-1 justify-start pt-12 px-4 text-center items-center">
            <CustomeStepper activeStep={formlvl} />
            <PersonalPage next={nextFormLevel} setData={setPersonalData}/>
        </div>
    );
}

