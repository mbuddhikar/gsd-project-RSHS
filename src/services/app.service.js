import axios from 'axios';
import api from '../utils/api';

class AppService {

    addInstitute(data) {
        return new Promise((resolve, reject) => {
            axios.defaults.headers.common['app-token'] = api.APP_TOKEN;
            axios.defaults.headers.common['session-token'] = window.localStorage.getItem('jwt');
            axios
                .post(api.ADD_INSTITUE, data)
                .then(result => {
                    if (result.data.success) {
                        resolve(result.data.data)
                    } else {
                        reject(result.data)
                    }
                })
                .catch(error => reject(error));
        });
    }
}

export default new AppService();
