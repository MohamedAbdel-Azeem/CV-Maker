import { Header } from "./components/Header";
import { WelcomePage } from "./pages/WelcomePage";

export default function App() {
  return (
    <main className="h-screen w-screen bg-red-500">
      <Header />
      <WelcomePage />
    </main>
  )
}