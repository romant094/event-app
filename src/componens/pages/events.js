import React, {Component} from 'react';
import { withCookies, Cookies } from 'react-cookie';
import {Card, CardBody, CardText, CardTitle, CardSubtitle, Button} from 'reactstrap';
import {Link} from "react-router-dom";
import {WithEventService} from "../hoc";
import Spinner from "../_common/spinner";

class Events extends Component {
    state = {events: null};

    componentDidMount() {
        const {eventService} = this.props;
        eventService.getEvents()
            .then(res => this.setState({events: res.results}))
    }

    renderEvents = () => this.state.events.map(({id, title}) => (
        <div className='col-3 mb-3' key={id}>
            <Card>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardText>Описание ивента</CardText>
                    <Link to={`/events/${id}`}>Подробнее</Link>
                </CardBody>
            </Card>
        </div>
    ));

    render() {
        const {events} = this.state;
        console.log(events);
        if (!events) return <Spinner/>;

        return (
            <div className='container mb-3'>
                <div className='row'>
                    {
                        this.renderEvents()
                    }
                </div>
            </div>
        );
    }
}

export default WithEventService()(withCookies(Events));