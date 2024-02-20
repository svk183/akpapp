import "./App.css";
import logo from "../assets/logo.jpg";
import dc from "../assets/dc.jpg";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  console.log("data===>", data);

  const dummyData = [
    {
      sNo: 1,
      BookingDate: "18/2/2024",
      Time: "2:00 PM-3:00 PM",
      Location: "Anakapalli",
      subject: "Medical Emergency",
      participents: " Apparao, Ajay, Virat, andanfj, asdnjans",
      Department: "Medical Department",
      PhoneNumber: 9618968899,
      status: "Approved",
    },
    {
      sNo: 2,
      BookingDate: "18/2/2024",
      Time: "2:00 PM-3:00 PM",
      Location: "Anakapalli",
      subject: "Medical Emergency",
      participents: " Apparao, Ajay, Varat",
      Department: "Fire Department",
      PhoneNumber: 12334345234,
      status: "Approved",
    },
    {
      sNo: 3,
      BookingDate: "18/2/2024",
      Time: "2:00 PM-3:00 PM",
      Location: "Anakapalli",
      subject: "Medical Emergency",
      participents: " Apparao, Ajay, Virat",
      Department: "DRO Department",
      PhoneNumber: 123098766,
      status: "Approved",
    },
    {
      sNo: 4,
      BookingDate: "18/2/2024",
      Time: "2:00 PM-3:00 PM",
      Location: "Anakapalli",
      subject: "Medical Emergency",
      participents: " Apparao, Ajay, Virat",
      Department: "Medical Department",
      PhoneNumber: 9618968899,
      status: "Approved",
    },
  ];

  const date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getUTCFullYear();

  let navigate = useNavigate();
  const navigationPage = () => {
    let path = `/bookyourslot`;
    navigate(path);
  };

  return (
    <div className="App">
      <header className="Anakapalli-Collectorate">
        <h1 className="AnakapalliCollectorate">Anakapalli Collectorate</h1>
        <img src={logo} height={70} width={80} className="logo" />
      </header>
      <Navbar />
      <div style={{ display: "flex" }}>
        <h3 className="h3">
          District Level VC/Meeting Booking Status as on {day}-{month}-{year}
        </h3>
        <button className="slotBook" onClick={navigationPage}>
          Book Your Slot
        </button>
      </div>
      <div>
        <table className="table">
          <tr>
            <th>S.NO</th>
            <th>Booking Date</th>
            <th>Time</th>
            <th className="thLocation">Location</th>
            <th className="thSubject">Subject</th>
            <th className="thParticipents">Participants</th>
            <th className="thDepartment">Department</th>
            <th>Phone Number</th>
            <th>Status</th>
          </tr>
          {dummyData.map(function (arrayItem) {
            return (
              <tr>
                <th>{arrayItem.sNo}</th>
                <th>{arrayItem.BookingDate}</th>
                <th>{arrayItem.Time}</th>
                <th>{arrayItem.Location}</th>
                <th>{arrayItem.subject}</th>
                <th className="thParticipents">{arrayItem.participents}</th>
                <th>{arrayItem.Department}</th>
                <th>{arrayItem.PhoneNumber}</th>
                <th>{arrayItem.status}</th>
              </tr>
            );
          })}
        </table>
        <br></br>
      </div>
    </div>
  );
}

export default App;
