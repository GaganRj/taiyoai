
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './Components/Sidebar'
import Crud from './Pages/Crud'
import Maps from './Pages/Maps'
import Dashboard from './Pages/Dashboard'
import { LineChart } from './Pages/LineChart'

function App() {

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/dash' element={<Dashboard />}/>
          <Route path='/crud' element={<Crud />} />
          <Route path='/linegraph' element={<LineChart />} /> 
          <Route path='/maps' element={<Maps />} /> 
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App
