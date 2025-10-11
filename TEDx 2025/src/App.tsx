import './App.css'
import Countdown from './components/Countdown'
import Index from './components/Index'
import Header from './components/Header'

function App() {

  return (<div className="flex flex-col items-center justify-between min-h-screen m-4">
    <Header />
    <Countdown />
    <Index />
    </div>
  )
}

export default App
