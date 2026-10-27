import Todos from './components/Todos.jsx'
import Info from './components/Info.jsx'

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] py-8 font-light text-[#111]">
      <Todos />
      <Info name="Yesha Kangel O. Hermosilla" />
    </div>
  )
}

export default App