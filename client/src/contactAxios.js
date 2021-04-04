import axios from 'axios';

const contactAxios = axios.create({
    baseURL: "https://u5d6gnw6aj.execute-api.us-east-1.amazonaws.com/api/",
    headers: {
        "X-API-Key": "VXUsgQ2jsq3EM30icjHA91tETkqFwtXDak07xebM",
        "Content-Type": "application/json"
    }
});

export default contactAxios;
