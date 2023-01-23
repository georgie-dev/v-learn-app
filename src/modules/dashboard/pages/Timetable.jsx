import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, toast, localeEnGB } from '@mobiscroll/react';
import { useState, useCallback, useEffect, useMemo } from 'react';
import { Header } from '../components';

function Timetable() {

    const [myEvents, setEvents] = useState([]);
  
  


    useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);
    
    const onEventClick = useCallback((event) => {
        toast({
            message: event.event.title
        });
    }, []);

    const view = useMemo(() => {
        return {
            calendar: { 
              popover: true, 
              count: true }
        };
    }, []);

    return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl  dark:bg-secondary-dark-bg">
      <Header category='Tools' title="Timetable" />

      <Eventcalendar
            locale={localeEnGB}
            theme="ios" 
            themeVariant= 'auto'
            clickToCreate={true}
            dragToCreate={true}
            dragToMove={true}
            dragToResize={true}
            eventDelete={true}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
       />
      </div>
    ); 
}



export default Timetable;