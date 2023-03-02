import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Landing Page Componenets
import { Header, Login, Register, CourseRegistration } from './modules/landingPage/components';
import { Home, Sign } from './modules/landingPage/pages';

// Student Dashboard componenets
import { Assignments, Classes, CourseMaterials, Overview, Tests, Attendance, Timetable } from './modules/dashboard/pages'
import Dashboard from './modules/dashboard/App'

// Admin Components
import { AdminAssignments, AdminOverview, AdminTests, AdminCourseMaterials, LiveClass } from './modules/admin/pages';
import AdminDashboard from './modules/admin/App'
import { UploadedAssignments, SubmittedAssignments} from './modules/admin/components';

// General Components
import './App.css';
import { NotFound } from './components';
import { useSelector } from 'react-redux';


const ProtectedRoute = ({redirectPath = '/sign' }) => {
  const {isAuthenticated, userDetails} = useSelector(state => state.user)
  if (isAuthenticated && userDetails.token && !userDetails.is_staff ) {
    return <Dashboard/>
  }
  return <Navigate to={redirectPath}/>
}

const AdminRoute = ({redirectPath = '/sign' }) => {
  const {isAuthenticated, userDetails} = useSelector(state => state.user)
  if (isAuthenticated && userDetails.token && userDetails.is_staff ) {
    return <AdminDashboard/>
  }
  return <Navigate to={redirectPath}/>
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
          {/* <Route path='admin' element={<AdminLogin/>}/> */}
          <Route path='register' element={<Register />} />
          <Route path='CourseRegistration' element={<RequireReg />} />
        </Route>
        <Route path='/dashboard' element={<ProtectedRoute/>}>
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

        <Route path='/admin' element={<AdminRoute/>}>

         <Route index element={<AdminOverview />} />
         <Route path='live-class' element={<LiveClass/>} />
         <Route path='assignments' element={<AdminAssignments/>}>
          <Route index element={<SubmittedAssignments/>}/>
          <Route path='uploaded-assignments' element={<UploadedAssignments/>}/>
         </Route>
         <Route path='course-materials' element={<AdminCourseMaterials/>}/>
         <Route path='tests' element={<AdminTests/>}/>

        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
