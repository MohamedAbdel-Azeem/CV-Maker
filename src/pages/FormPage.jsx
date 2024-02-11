import { useState } from "react";
import { CustomeStepper } from "../components/Stepper";



export function FormPage(props) {

    const [formlvl, setFormlvl] = useState(0);

    function nextFormLevel(){
        const newlvl = formlvl + 1;
        setFormlvl(newlvl);
    }

    function prevFormLevel(){
        const newlvl = formlvl - 1;
        setFormlvl(newlvl);
    }

    return (
        <div className="w-full h-5/6 bg-slate-200 flex flex-col space-y-6 justify-start pt-12 px-4 text-center items-center">
            <CustomeStepper activeStep={formlvl} />
            <button className="bg-sky-500 text-slate-100 px-4 py-2 rounded-lg hover:shadow-2xl" onClick={nextFormLevel}>Next</button>
            <button className="bg-sky-500 text-slate-100 px-4 py-2 rounded-lg hover:shadow-2xl" onClick={prevFormLevel}>Back</button>
        </div>
    );
}