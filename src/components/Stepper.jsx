import Icon from '@mdi/react';
import { mdiAccount , mdiSchool , mdiBriefcase } from '@mdi/js';


export function CustomeStepper({ activeStep }) {
  return (
    <div className='flex flex-row items-center space-x-2'>
        <Circle icon={mdiAccount} number = {0} current = {activeStep} />
        <Line number = {0} current = {activeStep}/>
        <Circle icon={mdiSchool} number = {1} current = {activeStep} />
        <Line number = {1} current = {activeStep}/>
        <Circle icon={mdiBriefcase} number = {2} current = {activeStep} />
    </div>
  );
}


function Circle(props){
    const backgroundColor = (props.number < props.current)? 'bg-emerald-500' : (props.number === props.current)? 'bg-blue-500' : 'bg-slate-400';
    const className = `w-14 h-14 rounded-full ${backgroundColor} flex items-center justify-center transition duration-300 ease-in-out hover:shadow-2xl`;
    return (
        <div className={className}>
            <Icon path={props.icon} size={1} color={"#334155"}  />
        </div>
    );
}

function Line(props){
  const backgroundColor = (props.number < props.current)? 'bg-emerald-500' : (props.number === props.current)? 'bg-blue-500' : 'bg-slate-400';
  const className = `w-20 h-1 ${backgroundColor} transition duration-300`
  return (
        <div>
          <hr className = {className} />
        </div>
    );
}