import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../../components'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useSelector } from 'react-redux';

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


const JoinClass = () => {

    const { roomID } = useParams(); // Get the roomID from the URL parameter
    const { firstname, lastname } = useSelector(state => state.user.userDetails)
    console.log(roomID)

    const myMeeting = (element) => {
        const appID = 1451316291;
        const serverSecret = "a77e5395e9847b7e3e7d0fe1c7d7ff4c";
        const userID = randomID(5);
        const userName = firstname + ' ' + lastname
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomID,
            userID,
            userName
        );

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
        });
    }
    myMeeting()

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl  dark:bg-secondary-dark-bg">
            <Header category='Pages' title="Live Class" />
            <div className="w-full mx-auto rounded-md my-4 h-[20rem] bg-gray-100" id='app' ref={myMeeting}>
            </div>
        </div>
    );
}

export default JoinClass