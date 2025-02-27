import "./Layout.scss"
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./routes/homepage/homePage"
function App() {

  return (
    <div className="Layout">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="content">
        <HomePage/>
      </div>
       
    </div>
  )
}

export default App
