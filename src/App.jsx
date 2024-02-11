import { useState } from "react";
import { Header } from "./components/Header";
import { WelcomePage } from "./pages/WelcomePage";
import { FormPage } from "./pages/FormPage";


export default function App() {
  const [page, setPage] = useState('welcome');

  const pages = {
    'welcome': <WelcomePage setPage={setPage} />,
    'form': <FormPage setPage={setPage} />
  };

  return (
    <main className="h-screen w-screen">
      <Header />
      {pages[page]}
    </main>
  )
}