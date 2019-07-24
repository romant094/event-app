class EventService {
    _apiBase = 'https://spbevents.herokuapp.com';

    getResourse = async (url) => {
        const res = await fetch(this._apiBase + url);
        return await res.json();
    };

    getEvents = async () => {
        return await this.getResourse('/event-categories/?lang=&order_by=&fields=');
    };

    getPlaces = async () => {
        return await this.getResourse('/place-categories/?lang=&order_by=&fields=');
    };
}

export default EventService;