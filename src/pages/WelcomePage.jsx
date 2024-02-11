import { StyledButton } from "../components/StyledButton";

export function WelcomePage(props) {

    function nextPage(){
        props.setPage('form');
    }

    return (
        <div className="w-full h-5/6 bg-slate-200 flex flex-col space-y-6 justify-start pt-12 px-4 text-center items-center">
            <h1 className="font-mono text-4xl">Welcome to CV Maker</h1>
            <h2 className="font-sans text-2xl">Generate your Resume now easily in less than 5 minutes !</h2>
            <StyledButton text="Get Started" onClick={nextPage} />
        </div>
    )
}