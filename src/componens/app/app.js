import React, {Component} from 'react';
import Header from "../header";
import Footer from "../footer";
import WithEventService from "../hoc";

class App extends Component {
    state = {
        eventCategories: null,
        placeCategories: null
    };

    componentDidMount() {
        const {eventService} = this.props;

        eventService.getEventCategories()
            .then(eventCategories => this.setState({eventCategories}))
            .catch(error => console.log(error));

        eventService.getPlaceCategories()
            .then(placeCategories => this.setState({placeCategories}))
            .catch(error => console.log(error));
    }

    mapCategories = cat => cat.map(item => <option key={item.id} value={item.id}>{item.name}</option>);

    render() {
        const {eventCategories, placeCategories} = this.state;

        if (!(eventCategories && placeCategories)){
            return <div>Loading...</div>
        }

        return (
            <div>
                <Header />
                <div style={{display: 'flex'}}>
                    <div style={{width: '50%', padding: '0 10px'}}>
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
                    <div style={{width: '50%', padding: '0 10px'}}>
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
                </div>
                <Footer />
            </div>
        )
    }
}

export default WithEventService()(App);