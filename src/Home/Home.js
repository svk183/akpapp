import "./App.css";
import logo from "../assets/logo.jpg";
import dc from "../assets/dc.jpg";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import Header from "../header/Header";
import { useLocation } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  const location = useLocation();
  const admin = location?.state?.isAdmin?.isAdmin;
  const message = location?.state?.isAdmin?.message;
  console.log(message);

  const date = new Date();
  let day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getUTCFullYear();

  if (day.toLocaleString.length <= 1 && month.toLocaleString.length <= 1) {
    day = `0${day}`;
    month = `0${month}`;
  }

  let navigate = useNavigate();
  const navigationPage = () => {
    let path = `/bookyourslot`;
    navigate(path);
  };

  const Appointments = async () => {
    const response = await fetch("http://localhost:8000/appointments", {
      credentials: "include",
    });
    const data = await response.json();
    const result = data?.appointments;
    setData(result);
    try {
      if (response?.status == 200) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pendingAppointment = () => {
    navigate("/pending");
  };

  useEffect(() => {
    Appointments();
  }, []);

  return (
    <div className="App">
      <Header />
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "10%",
          marginTop: "5%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 className="h3">
            District Level VC/Meeting Booking Status as on {day}-{month}-{year}
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            position: "relative",
            left: "1%",
            gap: 30,
          }}
        >
          {admin == true && (
            <div>
              <button className="slotBook" onClick={pendingAppointment}>
                Pending Appointments
              </button>
            </div>
          )}
          <div>
            <button className="slotBook" onClick={navigationPage}>
              Book Your Slot
            </button>
          </div>
        </div>
      </div>

      <div style={{}}>
        <table className="table" width="100%">
          <tr>
            <th className="sNo">S.NO</th>
            <th>Booking Date</th>
            <th className="time">Time</th>
            <th className="location">Location</th>
            <th className="subject">Subject</th>
            <th className="participants">Participants</th>
            <th>Department</th>
            <th className="phone">Phone Number</th>
            <th>Status</th>
          </tr>
          {data.map((arrayItem, index) => {
            const indexNumber = index + 1;
            return (
              <tr style={{ fontWeight: "normal" }}>
                <th>{indexNumber}</th>
                <th>{arrayItem?.date}</th>
                <th>
                  {arrayItem?.startTime} to {arrayItem?.endTime}
                </th>
                <th>{arrayItem?.location}</th>
                <th className="thParticipents">{arrayItem?.subject}</th>
                <th>{arrayItem?.participants}</th>
                <th>{arrayItem?.department}</th>
                <th>{arrayItem?.phoneNumber}</th>
                <th>{arrayItem?.status}</th>
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
