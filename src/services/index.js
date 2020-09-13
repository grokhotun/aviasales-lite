const calcDuration = (time) => {
    const timestamp = time * 60;
    const hours = Math.floor(timestamp / 60 / 60);
    const minutes = Math.floor(timestamp / 60) - (hours * 60);
    return `${hours} ч. ${minutes} м.`
};

const calcTime = (departureTime, duration) => {
    const originTime = new Date(departureTime);
    const destinationTime = new Date();
    const departureTimeInMs = originTime.getTime();
    const arrivialTimeInMs = departureTimeInMs + duration * 60000;
    destinationTime.setTime(arrivialTimeInMs);
    const fromTime = `${originTime.getHours() < 10 ? '0' : ''}${originTime.getHours()}:${originTime.getMinutes() < 10 ? '0' : ''}${originTime.getMinutes()}`;
    const toTime = `${destinationTime.getHours() < 10 ? '0' : ''}${destinationTime.getHours()}:${destinationTime.getMinutes() < 10 ? '0' : ''}${destinationTime.getMinutes()}`;
    return (`${fromTime} - ${toTime}`);
};

export default class AviasalesService {

    _apiBase1 = "http://localhost:3000";
    _apiBase2 = "https://front-test.beta.aviasales.ru";

    getResource = async (url) => {
        const result = await fetch(`${this._apiBase2}${url}`);
        if (!result.ok) throw new Error(`Could not fetch ${url}` + `, received ${result.status}`);
        return await result.json();
    };

    getSearchId = async () => {
        const { searchId } = await this.getResource('/search');
        return searchId;
    };

    getData = async () => {
        const searchId = await this.getSearchId();
        let allTickets = [];
        let result = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
        let data = await result.json();
        allTickets = allTickets.concat(data.tickets);
        while (!result.stop) {
            try {
                let result = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
                let data = await result.json();
                allTickets = allTickets.concat(data.tickets);
            } catch (error) {
                if (result.status === 500) {
                    console.log('Повторяю запрос')
                } else {
                    break;
                }
            }
        }
        return allTickets.map((item) => ({
            carrier: item.carrier,
            price: item.price,
            totalDuration: item.segments[0].duration + item.segments[1].duration,
            totalTransitions: item.segments[0].stops.length + item.segments[1].stops.length,
            to: {
                timeInterval: calcTime(item.segments[0].date, item.segments[0].duration),
                duration: calcDuration(item.segments[0].duration),
                stops: item.segments[0].stops,
                direction: `${item.segments[0].origin} - ${item.segments[0].destination}`
            },
            from: {
                timeInterval: calcTime(item.segments[1].date, item.segments[1].duration),
                duration: calcDuration(item.segments[1].duration),
                stops: item.segments[1].stops,
                direction: `${item.segments[1].destination} - ${item.segments[1].origin}`
            }
        }));
    };
}