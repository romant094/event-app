import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from "../_common/header";
import Footer from "../_common/footer";
import {WithEventService} from "../hoc";
import Spinner from "../_common/spinner";
import './app.scss';
import {Events, Home} from "../pages";
import Event from "../pages/event";

class App extends Component {
    eventService = this.props.eventService;
    state = {
        eventCategories: null,
        placeCategories: null,

    };

    componentDidMount() {

        // this.eventService.getEventCategories()
        //     .then(eventCategories => this.setState({eventCategories}))
        //     .catch(error => console.error(error));
        //
        // this.eventService.getPlaceCategories()
        //     .then(placeCategories => this.setState({placeCategories}))
        //     .catch(error => console.error(error));

        console.log(this.eventService);
    }

    mapCategories = cat => cat.map(item => <option key={item.id} value={item.id}>{item.name}</option>);

    getSomeData = () => {
        this.eventService.getEventCategories()
            .then(res => console.log(res))
            .catch(error => console.error(error));
    };

    render() {

        return (
            <div>
                <Header/>
                {/*<div className='mb-3 row'>
                    <div className='col-6'>
                        <div>
                            Категории событий
                        </div>
                        <div>
                            <select>
                                {
                                    this.mapCategories(eventCategories)
                                }
                            </select>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div>
                            Категории мест
                        </div>
                        <div>
                            <select>
                                {
                                    this.mapCategories(placeCategories)
                                }
                            </select>
                        </div>
                    </div>
                </div>*/}

                <Switch>
                    <Route path='/' exact render={() => <Home/>}/>
                    <Route path='/events' exact render={() => <Events/>}/>
                    <Route path='/events/:id' render={() => <Event/>}/>
                </Switch>

                <div className='container mb-3'>
                    <button onClick={this.getSomeData}>
                        getSomeData
                    </button>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default WithEventService()(App);