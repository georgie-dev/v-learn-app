import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { Header, Login, Register, CourseRegistration, NotFound } from './modules/landingPage/components';
import Home from './modules/landingPage/pages/Home'

import Dashboard from './modules/dashboard/App'
import { Assignments, Classes, CourseMaterials, Overview, Tests, Attendance, Timetable } from './modules/dashboard/pages'

import { useSelector } from 'react-redux';
import Sign from './modules/landingPage/pages/Sign'

import './App.css';

const ProtectedRoute = ({ redirectPath = '/sign' }) => {
  const selector = useSelector(state => state.user.isAuthenticated)
  if (!selector) {
    return <Navigate to={redirectPath} />
  }
  return <Dashboard />
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
          <Route path='register' element={<Register />} />
          <Route path='CourseRegistration' element={<CourseRegistration />} />
        </Route>
        <Route path='/dashboard' element={<ProtectedRoute />}>
          {/* OverView */}
          <Route index element={<Overview />} />
          {/* Functions */}

          <Route path="assignments" element={<Assignments />} />
          <Route path="classes" element={<Classes />} />
          <Route path="courseMaterials" element={<CourseMaterials />} />
          <Route path="tests" element={<Tests />} />

          {/* Apps */}
          <Route path="attendance" element={<Attendance />} />
          <Route path="timetable" element={<Timetable />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
