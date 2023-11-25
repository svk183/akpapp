import './App.css'
import logo from '../assets/logo.jpg'
import dc from '../assets/dc.jpg'
import { Outlet, Link } from "react-router-dom";
import Navbar from '../Navbar';


function App() {
  return (
    <div className="App">
      <header className="Anakapalli-Collectorate">
        <h1 className="AnakapalliCollectorate">Anakapalli Collectorate</h1>
        <img src={logo} height={70} width={80} className="logo"/>
        <div>
        <img src={dc} height={70} width={80} className="dc"/>
        <h3 className="dcname" >Sri Pattanshetti Ravi  IAS</h3>
        <h4 className="dcname1" >Collector & District Magistrate</h4>

        </div>
             
      </header>
      <Navbar />
      <div>
  
      <h3 className="h3">District Level VC/Meeting Booking Status as on DD-MM-YYYY</h3>
      </div>
      <div>
        <table className="table"> 
          <tr>
            <th>S.NO</th>
            <th>Booking Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Subject</th>
            <th>Participants</th>
            <th>Department</th>
            <th>Phone Number</th>
            <th>Status</th>
          </tr>
          <tr>
          <td></td>
          </tr>
        </table>
      </div>
    </div>
    
  );
}

export default App;
