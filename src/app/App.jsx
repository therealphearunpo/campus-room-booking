import { Header } from '../components/layout/Header/Header.jsx'
import { HomePage } from '../pages/HomePage/HomePage.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <HomePage />
      </main>
    </div>
  )
}
