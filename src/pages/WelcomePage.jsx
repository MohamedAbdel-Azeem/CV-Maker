export function WelcomePage() {
    return (
        <div className="w-full h-5/6 bg-slate-200 flex flex-col space-y-6 justify-start pt-12 px-4 text-center items-center">
            <h1 className="font-mono text-4xl">Welcome to CV Maker</h1>
            <h2 className="font-sans text-2xl">Generate your Resume now easily in less than 5 minutes !</h2>
            <button className="bg-sky-500 text-slate-100 px-4 py-2 rounded-lg hover:shadow-2xl">Get Started</button>
        </div>
    )
}