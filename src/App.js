import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { Header, Login, Register, CourseRegistration, NotFound } from './modules/landingPage/components';
import Home from './modules/landingPage/pages/Home'
import AdminLogin from './modules/admin/pages/AdminLogin';

import Dashboard from './modules/dashboard/App'
import AdminDashboard from './modules/admin/App'
import { Assignments, Classes, CourseMaterials, Overview, Tests, Attendance, Timetable } from './modules/dashboard/pages'

import { useSelector } from 'react-redux';
import Sign from './modules/landingPage/pages/Sign'

import './App.css';

const ProtectedRoute = ({ redirectPath = '/sign' }) => {
  const {isAuthenticated} = useSelector(state => state.user)
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} />
  }
  return <Dashboard />
}

const RequireReg =({redirectPath = '/sign/register'}) => {
  const {isSuccess} = useSelector(state => state.user)
  if (!isSuccess) {
    return <Navigate to={redirectPath} />
  }
  return <CourseRegistration/>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/sign' element={<Sign />}>
          <Route index element={<Login />} />
          <Route path='admin' element={<AdminLogin/>}/>
          <Route path='register' element={<Register />} />
          <Route path='CourseRegistration' element={<RequireReg />} />
        </Route>
        <Route path='/dashboard' element={<ProtectedRoute />}>
          {/* OverView */}
          <Route index element={<Overview />} />
          {/* Functions */}

          <Route path="assignments" element={<Assignments />} />
          <Route path="classes" element={<Classes />} />
          <Route path="course-materials" element={<CourseMaterials />} />
          <Route path="tests" element={<Tests />} />

          {/* Apps */}
          <Route path="attendance" element={<Attendance />} />
          <Route path="timetable" element={<Timetable />} />
        </Route>

        <Route path='/admin' element={<AdminDashboard/>}>

        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
