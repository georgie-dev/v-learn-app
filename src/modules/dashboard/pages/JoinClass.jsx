import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../../components'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useSelector } from 'react-redux';


const JoinClass = () => {

    const { roomID } = useParams(); // Get the roomID from the URL parameter
    const { firstname, lastname } = useSelector(state => state.user.userDetails)
    console.log(roomID)

    const myMeeting = (element) => {
        const appID = 144770395;
        const serverSecret = "8aea8350811100009ea325505ceb64c4";
        const userID = 'Bernard'
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