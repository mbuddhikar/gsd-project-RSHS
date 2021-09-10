class Api {

    VERSION = 'v1';
    APP_TOKEN = 'DX9343ZXS9JPK5c8ws5ct9G4u3720jTQ5lHwbGJH777GflSQX1';

    // BASE_URL = 'http://localhost:9494';
    BASE_URL = 'http://119.235.4.210:9494';

    URL = this.BASE_URL + '/api/' + this.VERSION + '/'

    LOGIN = this.URL + 'admin-login';
    
    ADD_INSTITUE = this.URL + 'add-institute';
}

export default new Api();
