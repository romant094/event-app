import React from 'react';
import EventService from '../../services';

const WithEventService = () => (Wrapped) => {
    const eventService = new EventService();

    return (props) =>{
        return <Wrapped {...props} eventService={eventService}/>
    }
};

export {WithEventService};