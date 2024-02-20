import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./SlotBook.css";
import "react-datepicker/dist/react-datepicker.css";

function BookYourSlot() {
  const [startDate, setStartDate] = useState(new Date());
  const [starttime, setStartTime] = useState(new Date());
  const [endtime, setEndTime] = useState(new Date());

  const [department, setDepartment] = useState(" ");
  const [location, setLocation] = useState(" ");
  const [subject, setSubject] = useState(" ");
  const [listOfParticipents, setListOfParticipents] = useState(" ");
  const [phoneNumber, setPhoneNumebr] = useState(" ");

  console.log("startDate", startDate);
  console.log("startTime", starttime);
  console.log("EndTIme", endtime);
  console.log("department", department);
  console.log("location", location);
  console.log("subject", subject);
  console.log("listOfParticipents", listOfParticipents);
  console.log("PhoneNumebr", phoneNumber);

  return (
    <div className="BookYourSlotContainer">
      <h1 style={{ textAlign: "center", marginTop: 20 }}>BookYourSlot</h1>
      <div className="row1Container">
        <div className="datePicker">
          <label>Request Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="startTime">
          <label>Start Time</label>
          <DatePicker
            selected={starttime}
            onChange={(date) => setStartTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>
        <div className="endTime">
          <label>End Time</label>
          <DatePicker
            selected={endtime}
            onChange={(date) => setEndTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>
      </div>
      <br></br>
      <div className="row2Container">
        <div className="Department">
          <label>
            Department:
            <select
              className="Dept"
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option>Agriculture</option>
              <option>Housing</option>
              <option>Survey</option>
              <option>DRDA</option>
              <option>Transport</option>
              <option>Election cell</option>
            </select>
          </label>
        </div>
        <div className="location">
          <label>Location:</label>
          <select
            className="loca"
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>Location Hall</option>
            <option>VC Hall</option>
            <option>Meeting Hall</option>
          </select>
        </div>
        <div className="subject">
          <label>Subject</label>
          <input
            type="text"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
      </div>
      <br />

      <br />
      <div className="row3Container">
        <label style={{ marginLeft: 30 }}>List of Participents:</label>
        <input
          type="text"
          style={{ height: 100, width: "70%" }}
          placeholder="List Of Participents"
          onChange={(e) => setListOfParticipents(e.target.value)}
        />
      </div>
      <div style={{ display: "inline-flex", marginTop: 20, marginLeft: 70 }}>
        <label>Phone Number:</label>
        <input
          type="tel"
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumebr(e.target.value)}
          style={{ width: 200, height: 30, borderRadius: 20 }}
        />
      </div>
      <br></br>
      <div className="submitButton">
        <button
          type="submut"
          style={{
            width: 200,
            height: 40,
            borderRadius: 20,
            backgroundColor: "lightblue",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default BookYourSlot;
