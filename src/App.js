import 'bootstrap/dist/css/bootstrap.min.css'
import About from './Pages/About/About'
import Corpotate from './Pages/Corporate/Corpotate'
import Footer from './Pages/Footer/Footer'
import Group from './Pages/Group/Group'
import History from './Pages/History/History'
import Mission from './Pages/MIssion/Mission'
import Navber from './Pages/Navber/Navber'
import Service from './Pages/Service/Service'



function App() {
  return (
    <div >
      <Navber />
      <About />
      <Service />
      <History />
      <Mission />
      <Corpotate />
      <Group />
      <Footer />
    </div>
  )
}

export default App
