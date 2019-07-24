import React, {Component} from 'react';
import EventService from '../../services';

class App extends Component {
    state = {
        eventCategories: [],
        placeCategories: []
    };

    componentDidMount() {
        const eventService = new EventService();
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

        return (
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
        )
    }
}

export default App;