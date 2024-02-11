import { useState } from "react";
import { CustomeStepper } from "../components/Stepper";
import { PersonalPage } from "./form-pages/PersonalPage";
import { EducationPage } from "./form-pages/EducationPage";


export function FormPage(props) {

    const [formlvl, setFormlvl] = useState(0);

    const [personalData, setPersonalData] = useState({});
    const [eduData, setEduData] = useState({});

    function nextFormLevel(){
        const newlvl = formlvl + 1;
        setFormlvl(newlvl);
    }

    function prevFormLevel(){
        const newlvl = formlvl - 1;
        setFormlvl(newlvl);
    }

    const formPages = {
        0: <PersonalPage next={nextFormLevel} setData={setPersonalData} />,
        1: <EducationPage prev={prevFormLevel} next={nextFormLevel} setData={setEduData} />,
        2: <div>Form Page 3</div>,
    }


    return (
        <div className="w-full h-5/6 bg-slate-200 flex flex-col space-y-1 justify-start pt-12 px-4 text-center items-center">
            <CustomeStepper activeStep={formlvl} />
            {formPages[formlvl]}
        </div>
    );
}

