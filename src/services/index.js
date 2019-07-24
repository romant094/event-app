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
}

(new EventService()).getHelp()
    .then(res => console.log(res))
    .catch(error => console.log(error));

export default EventService;