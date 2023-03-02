import {VscFileSubmodule} from 'react-icons/vsc'
import {MdOutlineAssignment , MdOutlineClass, MdDashboard} from 'react-icons/md'
import {SiGoogleclassroom} from 'react-icons/si'
import {BsPersonCheck} from 'react-icons/bs'
import {AiOutlineSchedule, AiOutlineCloudUpload} from 'react-icons/ai'


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
            name: 'admin',
            icon: <MdDashboard/>
          },
        ],
      },
      {
        title: 'Pages',
        links: [
          {
            name: 'live-class',
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
            name: 'class-schedule',
            icon: <AiOutlineSchedule/>,
          },
        ],
      },

];


export const boxes = [
  {
    icon: <SiGoogleclassroom/>,
    value: 2,
    title: 'Today Class(es)',
    bg: 'bg-class',
    id: 1,
    route: 'classes/'

  },
  {
    icon: <MdOutlineAssignment/>,
    value: 4,
    title: 'Pending Assignment(s)',
    bg: 'bg-assignment',
    id: 2,
    route: 'assignments/'

  },
  {
    icon: <VscFileSubmodule/>,
    value: 2,
    title: 'New course Material(s)',
    bg: 'bg-cm',
    id: 3,
    route: 'course-materials/'

  },
  {
    icon: <MdOutlineClass/>,
    value: 1,
    title: 'Upcoming Test(s)',
    bg:'bg-test',
    id: 4,
    route: 'tests/'

  }
]

export const adminBoxes = [
  {
    icon: <SiGoogleclassroom/>,
    value: 2,
    title: 'Start a Live Class',
    bg: 'bg-class',
    id: 1,
    route: 'live-class'

  },
  {
    icon: <AiOutlineCloudUpload/>,
    value: 4,
    title: 'Upload an Assignment',
    bg: 'bg-assignment',
    id: 2,
    route: 'assignments/'

  },
  {
    icon: <AiOutlineCloudUpload/>,
    value: 2,
    title: 'Upload a new course Material',
    bg: 'bg-cm',
    id: 3,
    route: 'course-materials'

  },
  {
    icon: <MdOutlineClass/>,
    value: 1,
    title: 'Schedule a test',
    bg:'bg-test',
    id: 4,
    route: 'tests'

  }
]