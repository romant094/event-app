class EventService {
    _apiBase = 'https://spbevents.herokuapp.com';

    getResourse = async (url) => {
        const res = await fetch(this._apiBase + url);
        return await res.json();
    };

    getEventCategories = async () => {
        return await this.getResourse('/event-categories');
    };

    getPlaceCategories = async () => {
        return await this.getResourse('/place-categories');
    };

    getHelp = async () => {
        return await this.getResourse('/help');
    };

    getLocations = async () => {
        return await this.getResourse('/locations');
    };

    getEvents = async () => {
        return await this.getResourse('/events');
    };

    getEventsOfTheDay = async () => {
        return await this.getResourse('/events-of-the-day');
    };

    getEventsDetalization = async () => {
        return await this.getResourse('/events-detalization');
    };
}

(new EventService()).getHelp()
    .then(res => console.log(res))
    .catch(error => console.error(error));

export default EventService;