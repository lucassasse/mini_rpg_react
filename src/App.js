import './App.css'
import { Content } from './Content'
import { PlayerProvider } from './components/usePlayer'

function App() {
  return (
    <div className="App">
      <PlayerProvider>
        <Content />
      </PlayerProvider>
    </div>
  )
}

export default App
