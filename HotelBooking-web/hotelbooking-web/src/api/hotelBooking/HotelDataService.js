import axios from 'axios';
class HotelDataService{
    retrieveAllHotels(){
        return axios.get(`http://localhost:8090/hotel`);
    }
}

export default new HotelDataService();