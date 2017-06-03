import axios from 'axios';
import {reqhost} from './api'

export const getBlog = params => axios.get(`${reqhost}/blog`, { params });
