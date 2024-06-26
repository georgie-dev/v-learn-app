import React, { useState } from 'react'
import { Header } from '../../../components'
import { useSelector } from 'react-redux'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { ZegoSuperBoardManager } from "zego-superboard-web";
import axiosInstance from '../../auth/axios';
import Toast from '../../auth/Toast';


function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(
  url = window.location.href
) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

const LiveClass = () => {
  const [start, setStart] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(false)

  const { courses, title, firstname, lastname } = useSelector(state => state.user.userDetails)
  const roomID = course.split(' ').join('') + '-' + lastname
  console.log(roomID)


  
  const myMeeting = (element) => {
    // generate Kit Token
    const appID = process.env.APP_IDD;
    const serverSecret = process.env.SECRET_KEY;
    const userID = randomID(5);
    const userName = title + ' ' + firstname + ' ' + lastname
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      userID,
      userName
    );
    console.log(roomID)

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.addPlugins({ ZegoSuperBoardManager });
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Class link',
          url: `/dashboard/classes/${course.split(' ').join('-')}/join/${roomID}`
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      showRoomTimer: true,
      showLeavingView: false,
      onLeaveRoom: () => {
      },
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const data = {
      lecturer: title + ' ' + firstname + ' ' + lastname,
      course: course,
      link: `/dashboard/classes/${course.split(' ').join('-')}/join/${roomID}`
    }
    axiosInstance.post('/api/class/', data)
      .then((res) => {
        setShowModal(false)
        setLoading(false)
        console.log(roomID)
        Toast.fire({
          icon: "success",
          title: "Starting",
        });
      })
      .catch((res) => {
        console(res)
        Toast.fire({
          icon: "error",
          text: 'Failed to start'
        });
      })
      .finally(() => {
        setStart(true);
      })
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl  dark:bg-secondary-dark-bg">
      <Header category='Pages' title="Live Class" />
      <div className='flex justify-end my-8'>
        <button

          onClick={() => { setShowModal(true) }}
          className='py-2 px-6 border rounded-md gap-3 flex justify-center items-center bg-main-dark-bg my-0 w-fit float-right text-white font-bold font-Machina cursor-pointer hover:bg-slate-700'
        >
          Start Class
        </button>
      </div>
      <div className="w-full mx-auto rounded-md h-[34rem] bg-gray-100" ref={start ? myMeeting : null} id='live-class'>
        <small className='text-center flex justify-center items-center text-4xl p-8 font-Machina text-gray-300'>Start a class</small>
      </div>
      {showModal ?
        <div className="fixed inset-0 z-10 overflow-y-auto md:ml-72">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
          ></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-sm p-4 mx-auto bg-white dark:bg-secondary-dark-bg rounded-md shadow-lg">
              <div className='flex justify-between items-center'>
                <header className='font-Machina lg:text-xl text-lg font-bold p-2'>Select the Course</header>
              </div>
              <div className='mt-6 px-3 w-full mx-auto'>
                <form onSubmit={handleSubmit}>
                  <div className='flex flex-col  w-full '>
                    <select
                      name="course"
                      onChange={(e) => setCourse(e.target.value)}
                      value={course}
                      className='p-2 rounded-lg border bg-white border-slate-300 my-0 w-100 font-Machina'
                      required
                    >
                      <option value="">Select Course</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.courseCode}>
                          {course.courseCode}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='flex justify-between my-2'>
                    <button
                      className=" mt-2 p-2 w-40 text-gray-800 dark:text-black dark:bg-slate-300 rounded-md outline-none border "
                      onClick={() => { setShowModal(false) }}
                    >
                     Cancel
                    </button>

                    <button
                      type='submit'
                      className='mt-2 p-2 w-40 text-white bg-main-dark-bg dark:text-black flex justify-center dark:bg-slate-300 rounded-md outline-none disabled:cursor-not-allowed disabled:bg-gray-400 items-center'
                      disabled={loading}
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        :
        null
      }
    </div>
  )
}

export default LiveClass