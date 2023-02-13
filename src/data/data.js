import {VscFileSubmodule} from 'react-icons/vsc'
import {MdOutlineAssignment , MdOutlineClass, MdDashboard} from 'react-icons/md'
import {SiGoogleclassroom} from 'react-icons/si'
import {BsPersonCheck} from 'react-icons/bs'
import {AiOutlineSchedule} from 'react-icons/ai'


export const StudentSidebar= [
    {
        title: 'Overview',
        links: [
          {
            name: 'dashboard',
            icon: <MdDashboard/>
          },
        ],
      },
      {
        title: 'Pages',
        links: [
          {
            name: 'classes',
            icon: <SiGoogleclassroom/>,
          },
          {
            name: 'assignments',
            icon: <MdOutlineAssignment/>,
          },
          {
            name: 'course-materials',
            icon: <VscFileSubmodule/>,
          },
          {
            name: 'tests',
            icon: <MdOutlineClass/>,
          },
        ],
      },

      {
        title: 'Tools',
        links: [
          {
            name: 'attendance',
            icon: <BsPersonCheck/>,
          },
          {
            name: 'timetable',
            icon: <AiOutlineSchedule/>,
          },
        ],
      },

];

export const AdminSidebar= [
    {
        title: 'Overview',
        links: [
          {
            name: 'dashboard',
            icon: <MdDashboard/>
          },
        ],
      },
      {
        title: 'Pages',
        links: [
          {
            name: 'courses',
            icon: <SiGoogleclassroom/>,
          },
          {
            name: 'assignments',
            icon: <MdOutlineAssignment/>,
          },
          {
            name: 'course-materials',
            icon: <VscFileSubmodule/>,
          },
          {
            name: 'tests',
            icon: <MdOutlineClass/>,
          },
        ],
      },

      {
        title: 'Tools',
        links: [
          {
            name: 'attendance',
            icon: <BsPersonCheck/>,
          },
          {
            name: 'timetable',
            icon: <AiOutlineSchedule/>,
          },
        ],
      },

];