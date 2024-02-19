export function ExperienceElement(props){
    console.log(props);
    return (
        <div className="w-full flex flex-col space-y-3 items-center justify-center">
            <h3 className="text-2xl font-medium">{props['Company Name']}</h3>
            <div className="w-full flex flex-col space-y-2 items-center px-7">
                <h4 className="text-lg">{props['Position Title']}</h4>
                <h5>{props['Location']}</h5>
                <h6>{props['Start Date']} - {props['End Date']}</h6>
                <p>{props['Description']}</p>
            </div>
        </div>
    );
}