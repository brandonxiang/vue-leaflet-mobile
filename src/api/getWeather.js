import axios from 'axios';
import {reqhost} from './api'

export const getFutureWeather = params => axios.get(`${reqhost}/weather/future`, { params });

export const getNowWeather = params => axios.get(`${reqhost}/weather/now`, { params });
