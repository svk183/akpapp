import React from 'react'
import Home from './Home/Home'
import {Route,Routes} from 'react-router-dom'
import GSWS from '../src/dashboards/GSWS'
import MedicalDepartment from '../src/dashboards/MedicalDepartment'
import ReSurvey from '../src/dashboards/ReSurvey'
import Contact from '../src/contact/Contact'
import Login from './login/Login'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/gsws' element={<GSWS />} />
        <Route path='/resurvey' element={<ReSurvey />} />
        <Route path='/medicaldepartment' element={<MedicalDepartment />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />}/>
    </Routes>
    </div>
  )
}

export default App