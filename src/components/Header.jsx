import logo from '../../public/logo.png';

export function Header() {
    return (
        <div className="w-full bg-sky-400 h-1/6 flex justify-center items-center space-x-4 relative top-0">
            <h1 className="font-mono text-4xl">CV Maker</h1>
            <img src={logo} alt="logo" className="w-16 h-16 rotate-6" />
        </div>
    )
}