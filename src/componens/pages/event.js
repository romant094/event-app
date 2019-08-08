import React, {Component} from 'react';
import {WithEventService} from "../hoc";

class Event extends Component {
    componentDidMount() {
        const {eventService}=this.props;
        eventService.getEvents()
            .then(res=>console.log(res))
    }

    render() {
        return (
            <div className='container mb-3'>
                Event
            </div>
        );
    }
}

export default WithEventService()(Event);