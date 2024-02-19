import { ExperienceElement } from "./ExperienceElement";

export function ExperienceSection(props){
    console.log(props.expData);
    if (props.expData.length > 0){
        return (
            <div className="w-full px-5 flex flex-col mt-4 space-y-5">
                <h2 className="text-3xl mb-3 text-slate-900 font-medium underline underline-offset-2">Experience</h2>
                <div className="flex flex-col space-y-8">
                    {
                        props.expData.map((exp) => {
                            return (<ExperienceElement key={exp['Experience Id']} {...exp} />);
                        })
                    }
                </div>
            </div>
        );
    }
    return (
        <>
        </>
    );
}