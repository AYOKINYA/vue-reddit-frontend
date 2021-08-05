import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/users/search";

class SearchService {
    searchUser(username) {
        return axios.get(BASE_URL, {params: { name: username }});
    }

}

export default new SearchService();