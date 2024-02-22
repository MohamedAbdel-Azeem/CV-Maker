import { useState , useEffect } from "react";
import { CustomeStepper } from "../components/Stepper";
import { PersonalPage } from "./form-pages/PersonalPage";
import { EducationPage } from "./form-pages/EducationPage";
import { ExperiencePage } from "./form-pages/ExperiencePage";

export function FormPage(props) {

    const [formlvl, setFormlvl] = useState(0);

    const [personalData, setPersonalData] = useState({});
    const [eduData, setEduData] = useState({});
    const [expData, setExpData] = useState([]);

    useEffect(() => {
        props.getFormData({ personalData, eduData, expData });
    }, [personalData, eduData, expData]);

    function nextFormLevel(){
        const newlvl = formlvl + 1;
        setFormlvl(newlvl);
    }

    function prevFormLevel(){
        const newlvl = formlvl - 1;
        setFormlvl(newlvl);
    }

    const formPages = {
        0: <PersonalPage next={nextFormLevel} setData={setPersonalData} data={personalData} />,
        1: <EducationPage prev={prevFormLevel} next={nextFormLevel} setData={setEduData} data={eduData} />,
        2: <ExperiencePage prev={prevFormLevel} setData={setExpData} submit={() => {props.setPage('preview')}} />,
    }


    return (
        <div className="w-full h-5/6 bg-slate-200 flex flex-col space-y-4 justify-start pt-12 px-4 text-center items-center overflow-y-auto">
            <CustomeStepper activeStep={formlvl} />
            {formPages[formlvl]}
        </div>
    );
}

