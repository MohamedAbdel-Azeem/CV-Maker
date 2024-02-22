import { useState } from "react";
import { Header } from "./components/Header";
import { WelcomePage } from "./pages/WelcomePage";
import { FormPage } from "./pages/FormPage";
import { PreviewPage } from "./pages/PreviewPage";

export default function App() {
  const [page, setPage] = useState('welcome');
  const [formData, setFormData] = useState({});


  const pages = {
    'welcome': <WelcomePage setPage={setPage} />,
    'form': <FormPage setPage={setPage} getFormData={setFormData}   />,
    'preview': <PreviewPage setPage={setPage} formData={formData} />
  };

  return (
    <main className="h-screen w-screen">
      <Header />
      {pages[page]}
    </main>
  )
}