import axios from 'axios';

// const axios = require('axios');

const searchInstance = axios.create({
    baseURL: 'https://customsearch.googleapis.com/customsearch/v1',
    params: {
        cx: 'e618e79e98fbe4c04',
        num: 5,
        searchType: 'image',
        key: 'AIzaSyDejFRaLhD5DCtMABdJlZ5ABfc5H6oMVK4'
    }
});

export default searchInstance;

// searchInstance.get('', {params:{
//     q: 'car'
// }}).then(res => console.log(res.data.items[0]));