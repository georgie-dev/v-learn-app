import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header, Login, Register, Sign } from './modules/landingPage/components';
import Home from './modules/landingPage/pages/Home'
import Dashboard from './modules/dashboard/App'
import {Assignments, Classes, CourseMaterials, Overview, Tests, Attendance, Timetable} from './modules/dashboard/pages'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<Home/>}/>
      </Route>
      <Route path='/sign' element={<Sign/>}>
      <Route index element={<Login/>}/>
      <Route path='register'element={<Register/>}/>
      </Route>
      <Route path='/dashboard' element={<Dashboard/>}>
      {/* OverView */}
      <Route index element={<Overview/>} />
      <Route path="overview" element={<Overview/>} />
      {/* Functions */}

      <Route path="assignments" element={<Assignments/>} />
      <Route path="classes" element={<Classes/>} />
      <Route path="courseMaterials" element={<CourseMaterials/>} />
      <Route path="tests" element={<Tests/>} />

      {/* Apps */}
      <Route path="attendance" element={<Attendance/>} />
      <Route path="timetable" element={<Timetable/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
