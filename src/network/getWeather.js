import axios from 'axios'
import { weatherhost } from './api'

export const getFutureWeather = (params) => axios.get(weatherhost + '/daily.json', {params})

export const getNowWeather = (params) => axios.get(weatherhost + '/now.json', {params})