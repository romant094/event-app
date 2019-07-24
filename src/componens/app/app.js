import React from 'react';
import EventService from '../../services';

const App = () => {
    const eventService = new EventService();
    eventService.getEvents()
        .then(res => console.log(res))
        .catch(error => console.log(error));

    eventService.getPlaces()
        .then(res => console.log(res))
        .catch(error => console.log(error));

    return (
        <div>
            Hello world!
        </div>
    );
};

export default App;