import 'bootstrap/dist/css/bootstrap.min.css'
import About from './About/About'
import History from './Pages/History/History'
import Navber from './Pages/Navber/Navber'
import Service from './Service/Service'


function App() {
  return (
    <div >
      <Navber></Navber>
      <About></About>
      <Service></Service>
      <History></History>
    </div>
  )
}

export default App
