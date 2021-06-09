import axios from 'axios';

const axiosInstance = axios.create({
	baseURL:  'http://localhost:3000',
	timeout: 10000,
	headers: {
		'Accept': '*/*',
		'Content-Type': 'application/json; charset=utf-8',
		"Access-Control-Allow-Origin": "*"
	}
})

export default axiosInstance;